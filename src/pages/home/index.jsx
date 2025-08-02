import { useState, useEffect } from "react";
import "./style.css";


function navegacao() {
  return (
    <header id="cabeçalho">
      <div><img src="/src/assets/selecao.png" alt="simbolo" />Allisson</div>
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
      <div className="contatosfixo">
        <img id="linha" src="src/assets/linha.png" alt="linha" />
        <a href=""><img src="src/assets/discordia.png" alt="discord" /></a>
        <a href=""><img src="src/assets/github.png" alt="github" /></a>
        <a href=""><img src="src/assets/mail.png" alt="e-mail" /></a>
      </div>
      <main>
        <aside className="sobremim">
          <article className="resumo">
            <h1>Sou um desenvolvedor <span>full stack</span> <br />dando <span>os primeiros passos</span> no mercado</h1>
            <p id="efeito">"Criatividade e inovação sempre andam de mãos dadas"</p>
            <div id="contateme">Contate-me!!</div>
          </article>
          <article className="usuario">
            <img id="simbolofoto" src="/src/assets/simbol.png" alt="simbolo" />
            <img id="foto" src="/src/assets/perfil.png" alt="perfil" />
            <p id="workingon"><span>#</span>Atualmente -- estudando JAVA</p>
            <img id="pontofoto" src="/src/assets/malha.png" alt="pontos" />
          </article>
        </aside>
        <aside className="slogan">
          <h2>"A evolução não é instantânea, mas inevitável quando há curiosidade e persistência."</h2>
          <p>— Carl Sagan</p>
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
