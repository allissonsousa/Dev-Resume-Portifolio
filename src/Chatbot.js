import React, { useState } from "react";
import axios from 'axios';


function Chatbot() {
  const [mensagens, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.alvo.valor);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Adicionar mensagem do usuario ao array de mensagens
    setMessages ([...mensagens, {function : 'usuário', texto : input}]);

    try {
        //envia mensagem do usuário para a API do chat gpt
        const resposta = await axios.post (
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                promt : `Usuário: ${input}\nChatGPT` ,
                max_tokens : 100,
            },
            {
                headers: {
                    'Tipo de conteúdo' : 'aplications/json',
                    'Autorização' : 'Portador API_KEY'
                },
            }
        );

        //
        const botResponse = resposta.dados.escolhas [0].text;

        //adicione a mensagem do bot ao array de mensagens
    }
  };
  
  //Extraia a resposta do bot da resposta da API 

  return (
    <div className="chatbot">
      <div className="caixa-de-batepapo">
        <div className="mensagens">
          {mensagens.map((mensages, indice) => (
            <div key={index} className="mensagem">
              {mensagens.fuction === "bot" ? (
                <div className="bot-message"> {mensagem.text} </div>
              ) : (
                <div className="user-message">{mensagem.text}</div>
              )}
            </div>
          ))}
        </div>
        <input
          tipo="texto"
          valor={input}
          onChange={handleInputChange}
          placeholder="Pergunte a AI..."
        />
        <button onClick={handleSendMessage}> Enviar </button>
      </div>
    </div>
  );
}

export default Chatbot;

//usar o npm install axios
