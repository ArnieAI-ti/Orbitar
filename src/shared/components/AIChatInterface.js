import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Paper, Typography, IconButton, Fab } from '@mui/material';
import { Send as SendIcon, Close as CloseIcon, Minimize as MinimizeIcon } from '@mui/icons-material';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  chatContainer: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    width: 350,
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[10],
    borderRadius: theme.shape.borderRadius * 2, // Increased border-radius
    backgroundColor: theme.palette.background.paper,
    zIndex: 1000,
    overflow: 'hidden', // Ensures content respects border-radius
  },
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5), // Increased padding
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    // borderTopLeftRadius and borderTopRightRadius are handled by parent container's borderRadius
  },
  messagesContainer: {
    flexGrow: 1,
    padding: theme.spacing(1.5), // Increased padding
    overflowY: 'auto',
    backgroundColor: theme.palette.background.default, // Changed background color to a more dynamic one
  },
  messageBubble: {
    maxWidth: '80%',
    padding: theme.spacing(1.5), // Increased padding
    borderRadius: theme.shape.borderRadius * 2, // Increased border-radius
    marginBottom: theme.spacing(1.5), // Increased margin
    wordBreak: 'break-word',
    boxShadow: theme.shadows[1], // Subtle shadow
  },
  userMessage: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    marginLeft: 'auto',
    borderBottomRightRadius: 0, // For a chat bubble effect
  },
  aiMessage: {
    backgroundColor: theme.palette.info.light, // Changed background color to a more dynamic one
    color: theme.palette.text.primary, // Ensure text is visible
    marginRight: 'auto',
    borderBottomLeftRadius: 0, // For a chat bubble effect
  },
  inputContainer: {
    display: 'flex',
    padding: theme.spacing(1.5), // Increased padding
    borderTop: `1px solid ${theme.palette.divider}`,
    alignItems: 'center', // Align items vertically
  },
  minimizedChat: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
    width: 150, // Smaller width for the minimized state
    height: 50, // Smaller height for the minimized state
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: theme.shadows[5],
  },
});

function AIChatInterface(props) {
  const { classes, onClose, onMinimizeStatusChange } = props;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (onMinimizeStatusChange) {
      onMinimizeStatusChange(isMinimized);
    }
  }, [isMinimized, onMinimizeStatusChange]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newUserMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInput('');

      // Llama a tu API de Colab
            fetch('https://cc2c4725b8c7.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }), // Envía el mensaje del usuario a tu API
      })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
      })
      .then(data => {
        // Asume que tu API de Colab devuelve un objeto con una propiedad 'response'
        const aiResponse = { text: data.response, sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      })
      .catch(error => {
        console.error('Error al conectar con la API de Colab:', error);
        const errorMessage = { text: 'Lo siento, hubo un error al obtener la respuesta.', sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  if (isMinimized) {
    return (
      <Fab
        variant="extended"
        color="primary"
        aria-label="maximize chat"
        onClick={handleMaximize}
        className={classes.minimizedChat}
      >
        AI Caparazón
      </Fab>
    );
  }

  return (
    <Paper className={classes.chatContainer}>
      <Box className={classes.chatHeader}>
        <Typography variant="h6">Asistente AI</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleMinimize} size="small" color="inherit" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MinimizeIcon sx={{ transform: 'translateY(-5px)' }} />
          </IconButton>
          <IconButton onClick={() => { setMessages([]); onClose(); }} size="small" color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.messagesContainer}>
        {messages.map((msg, index) => {
          const messageClass = msg.sender === 'user' ? classes.userMessage : classes.aiMessage;
          return (
            <Box
            key={index}
            className={`${classes.messageBubble} ${messageClass}`}
          >
            <Typography variant="body2">{msg.text}</Typography>
          </Box>
          );
        })}
        <div ref={messagesEndRef} />
      </Box>
      <Box className={classes.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ ml: 1 }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
}

export default withStyles(styles)(AIChatInterface);