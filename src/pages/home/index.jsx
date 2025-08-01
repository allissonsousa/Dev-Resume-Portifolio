import { useState, useEffect } from "react";
import "./style.css";

function navegacao() {
  return (
    <header id="cabeçalho">
      <div>Allisson</div>
      <div id="navegacao">
        <div><span>#</span>home</div>
        <div><span>#</span>trabalhos</div>
        <div><span>#</span>sobre</div>
        <div><span>#</span>contate-me</div>
      </div>
    </header>
  );
}

function exibeprojeto() {
  const projetos = [
    { id: 1, nome: "python" },
    { id: 2, nome: "java" },
    { id: 3, nome: "web" },
    { id: 4, nome: "react" },
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
    <div id="corpo">
      {navegacao()}
      <main>
        <aside>
          <h1>Sou Allisson e estou em busca de aprender</h1>
          <p>"Criatividade e inovação sempre andam de mãos dadas"</p>
          <div id="contateme">Contate-me!!</div>
          <article>
            <img width={"200px"} height={"200px"} src="/assets/simbol.png" alt="simbolo" />
            <img width={"200px"} height={"200px"} src="/assets/mail.png" alt="perfil" />
            <img width={"200px"} height={"200px"} src="/assets/pontos.png" alt="pontos" />
            <p id="workingon"><span>#</span>Atualmente -- estudando JAVA</p>
          </article>
        </aside>
        {exibeprojeto()}
        <article><span>#</span>skills</article>
        <article><span>#</span>about</article>
        <article><span>#</span>contact</article>
      </main>
      <footer></footer>
    </div>
  );
}
export default Home;
