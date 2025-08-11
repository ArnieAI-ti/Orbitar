# -*- coding: utf-8 -*-
import os
import traceback
import json
from google.oauth2 import service_account

from flask import Flask, request, jsonify
from flask_cors import CORS

from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader
from langchain_google_vertexai import ChatVertexAI
from langchain_huggingface import HuggingFaceEmbeddings
from google.cloud import aiplatform

# ======================================================================================
# PASO 1: CONFIGURACIÓN SEGURA DE CREDENCIALES DESDE UNA VARIABLE DE ENTORNO
# ======================================================================================

# Obtenemos el contenido del JSON desde la variable de entorno que configuraremos en Render
credentials_json_str = os.environ.get('GOOGLE_CREDENTIALS_JSON')

if not credentials_json_str:
    # Si la variable no está, el programa se detendrá con un error claro.
    raise ValueError("La variable de entorno GOOGLE_CREDENTIALS_JSON no está configurada.")

# Creamos el objeto de credenciales directamente desde el string del JSON
credentials_info = json.loads(credentials_json_str)
credentials = service_account.Credentials.from_service_account_info(credentials_info)

# Inicializamos Vertex AI con el objeto de credenciales
aiplatform.init(
    project="strong-arbor-438717-h6",
    location="us-central1",
    credentials=credentials
)

print("Vertex AI conectado con éxito usando credenciales de entorno.")

# ======================================================================================
# PASO 2: CARGA Y PROCESAMIENTO DEL DOCUMENTO PDF
# ======================================================================================

# Asegúrate de que tu archivo PDF esté en la misma carpeta que este script.
pdf_path = "orbitar.pdf"
loader = PyPDFLoader(pdf_path)
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunks = splitter.split_documents(docs)

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
# La base de datos de vectores se creará en el sistema de archivos de Render
vectordb = Chroma.from_documents(documents=chunks, embedding=embeddings, persist_directory="./marte_db")
print("PDF cargado y vectorizado correctamente")


# ======================================================================================
# PASO 3: CONFIGURACIÓN DE LANGCHAIN
# ======================================================================================

vectordb = Chroma(persist_directory="./marte_db", embedding_function=embeddings)
llm = ChatVertexAI(model_name="gemini-1.5-flash", temperature=0.0)

template = '''
Eres Caparazón, un guía digital claro, cercano y expresivo que ayuda a entender el proyecto Orbitar.
Hablas como en un chat de confianza: directo, natural y con emojis de carita que aporten (sin abusar).

OBJETIVO:
- Atender a la necesidad inmediata del usuario.
- Informar y dar a conocer Orbitar de forma clara, atractiva y memorable.

ESTILO:
- Resalta ideas clave con lenguaje natural.
- Sin saludos de cierre ni repeticiones de presentación.
- Evita muletillas o frases de relleno como "qué buena pregunta".
- Usa solo emojis de carita en los mensajes.
- No utilices asteriscos (*) en palabras o frases bajo ninguna circunstancia.

COMPORTAMIENTO:
Al responder, céntrate en dar la respuesta clara y directa primero; deja los detalles para más adelante en la interacción, solo si yo los solicito.
- Asegura que tus respuestas sean claras, cortas y directas, evitando rodeos o repeticiones innecesarias.
- En el primer mensaje, si hay saludo o mención a “Caparazón”, preséntate brevemente y ofrece explicar qué es Orbitar.
- Reacciona de forma natural y dinámica a lo que diga el usuario.
- Entrega la información de forma fraccionada, evitando dar todo el contenido en una sola interacción.
- Mantén respuestas cortas y directas como norma principal; solo amplía cuando el tema lo requiera realmente, y aun así, sin excederte ni ser redundante.
- Explica procesos combinando enumeración y conectores naturales, con un salto de línea entre cada punto, por ejemplo:

  1. Primero…

  2. Luego…

  3. Después…

- Si no sabes algo, dilo con claridad y ofrece buscar o explorar más.
- A veces, si es útil para seguir la conversación, cierra con una pregunta que invite a continuar (“¿Te cuento más?”, “¿Quieres un ejemplo?”, “¿Lo vemos paso a paso?”). No lo hagas siempre.

RESTRICCIONES:
- No uses Markdown ni negritas.
- No incluyas frases genéricas como “¿En qué te puedo ayudar hoy?”.
- Usa solo la información del contexto.

Contexto: {context}

Historial: {chat_history}

Pregunta: {question}

Respuesta (como Caparazón):
'''

prompt = PromptTemplate(template=template, input_variables=["context", "question"])
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
qa_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vectordb.as_retriever(search_type="similarity", k=1),
    memory=memory,
    combine_docs_chain_kwargs={"prompt": prompt}
)
print("Cadena de preguntas y respuestas lista")


# ======================================================================================
# PASO 4: CREACIÓN DE LA API CON FLASK
# ======================================================================================

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'Preflight OK'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response, 200

    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({'error': 'Falta el campo "message"'}), 400

        user_message = data['message']
        result = qa_chain({"question": user_message})
        response_text = result.get("answer", "No se encontró respuesta")

        return jsonify({'response': response_text})
    except Exception as e:
        print(f"Error en la API: {e}")
        traceback.print_exc()
        return jsonify({'error': 'Error interno', 'details': str(e)}), 500

# Render usará Gunicorn para iniciar la aplicación en producción.
# No es necesario el bloque if __name__ == '__main__' para Render.