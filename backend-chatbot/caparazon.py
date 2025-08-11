# -*- coding: utf-8 -*-
import os
import traceback
import json
# from google.oauth2 import service_account # Temporalmente comentado

from flask import Flask, request, jsonify
from flask_cors import CORS

# --- Bloque de LangChain temporalmente deshabilitado para un despliegue ligero ---
# from langchain.chains import ConversationalRetrievalChain
# from langchain.memory import ConversationBufferMemory
# from langchain.prompts import PromptTemplate
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain.vectorstores import Chroma
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_google_vertexai import ChatVertexAI
# from langchain_huggingface import HuggingFaceEmbeddings
# from google.cloud import aiplatform
# --------------------------------------------------------------------------------

print("Iniciando en modo de despliegue ligero...")

# ======================================================================================
# PASO 1: CONFIGURACIÓN DE CREDENCIALES (Temporalmente deshabilitado)
# ======================================================================================
# credentials_json_str = os.environ.get('GOOGLE_CREDENTIALS_JSON')
# if not credentials_json_str:
#     raise ValueError("La variable de entorno GOOGLE_CREDENTIALS_JSON no está configurada.")
# credentials_info = json.loads(credentials_json_str)
# credentials = service_account.Credentials.from_service_account_info(credentials_info)
# aiplatform.init(
#     project="strong-arbor-438717-h6",
#     location="us-central1",
#     credentials=credentials
# )
# print("Vertex AI conectado con éxito usando credenciales de entorno.")

# ======================================================================================
# PASO 2: CARGA Y PROCESAMIENTO DEL DOCUMENTO PDF (Temporalmente deshabilitado)
# ======================================================================================
# pdf_path = "orbitar.pdf"
# loader = PyPDFLoader(pdf_path)
# docs = loader.load()
# splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
# chunks = splitter.split_documents(docs)
# embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
# vectordb = Chroma.from_documents(documents=chunks, embedding=embeddings, persist_directory="./marte_db")
# print("PDF cargado y vectorizado correctamente")

# ======================================================================================
# PASO 3: CONFIGURACIÓN DE LANGCHAIN (Temporalmente deshabilitado)
# ======================================================================================
# vectordb = Chroma(persist_directory="./marte_db", embedding_function=embeddings)
# llm = ChatVertexAI(model_name="gemini-1.5-flash", temperature=0.0)
# template = ''' ... ''' # Template omitido por brevedad
# prompt = PromptTemplate(template=template, input_variables=["context", "question"])
# memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
# qa_chain = ConversationalRetrievalChain.from_llm(
#     llm=llm,
#     retriever=vectordb.as_retriever(search_type="similarity", k=1),
#     memory=memory,
#     combine_docs_chain_kwargs={"prompt": prompt}
# )
# print("Cadena de preguntas y respuestas lista")

# ======================================================================================
# PASO 4: CREACIÓN DE LA API CON FLASK (Versión ligera)
# ======================================================================================

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    # Endpoint de prueba para el despliegue ligero
    return jsonify({'response': 'Servidor ligero desplegado con éxito. Listo para actualizar el plan.'})

print("Servidor ligero listo para recibir peticiones.")
