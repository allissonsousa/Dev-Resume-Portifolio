import { useState, useEffect } from "react";
import "./style.css";
import discord from "./assets/discord.png";

function navegacao() {
  return (
    <header>
      <p>Allisson Sousa</p>
      <ul>
        <li>#home</li>
        <li>#trabalhos</li>
        <li>#sobre mim</li>
        <li>#contate</li>
      </ul>
    </header>
  );
}

function exibeprojeto() {
  const projetos = [
    { id: 1, nome: "python", simbolo: discord },
    { id: 2, nome: "java", simbolo: "./assets/java.jpg" },
    { id: 3, nome: "web", simbolo: "./assets/java.jpg" },
    { id: 4, nome: "react", simbolo: "./assets/java.jpg" },
  ];
  return (
    <div style={{ display: "flex", flexdirection: "row" }}>
      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <p>{projeto.nome}</p>
          <img src={projeto.simbolo} style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
}

//funçao principal que exporta a pagina 
function Home() {
  const home = useState(false);
  return (
    <body>
      <main>
        {navegacao()}
      <aside>nome e foto</aside>
      <p></p>
      {exibeprojeto()}
      <article>skills</article>
      <article>about</article>
      <article>contact</article>
      </main>
      <footer></footer>
    </body>
  );
}
export default Home;
