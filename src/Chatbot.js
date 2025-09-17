import React, { useState } from "react";
import axios from 'axios';

function Chatbot() {
  const [mensagens, setMensagens] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Adicionar mensagem do usuario ao array de mensagens
    setMensagens([...mensagens, { role: 'user', text: input }]);

    try {
      // envia mensagem do usuário para a API do chat gpt
      const resposta = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `Usuário: ${input}\nChatGPT`,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer API_KEY'
          },
        }
      );

      // Extraia a resposta do bot da resposta da API
      const botResponse = resposta.data.choices[0].text;

      // adicione a mensagem do bot ao array de mensagens
      setMensagens(prevMensagens => [
        ...prevMensagens,
        { role: 'bot', text: botResponse }
      ]);

      // limpa o campo de entrada
      setInput('');
    }
    catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="chatbot">
      <div className="caixa-de-batepapo">
        <div className="mensagens">
          {mensagens.map((mensagem, index) => (
            <div key={index} className="mensagem">
              {mensagem.role === "bot" ? (
                <div className="bot-message">{mensagem.text}</div>
              ) : (
                <div className="user-message">{mensagem.text}</div>
              )}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Pergunte a AI..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;

//usar o npm install axios
//Estilizar depois no css

