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
    { id: 1, imagem: "src/assets/analise-de-dados.jpg", nome: "Saúde Quest", content: "Análise de dados com python usando dados do sistema único de saúde", tags: "Python Pandas AI SQL Excel" },
    { id: 2, imagem: "src/assets/dados-financeiros.jpg", nome: "Finance View", content: "Criação de um acompanhador de valores da bolsa atual com Cruds em Java", tags: "JAVA Springboot Spring SQL Docker" },
    { id: 3, imagem: "src/assets/speed.png", nome: "Speed Timer", content: "Cronometro para cubo mágico com métricas ", tags: "HTML CSS JavaScript " }
  ];
  return (
    <div className="projetos">
      {projetos.map((projeto) => (
        <div className="projeto" key={projeto.id}>
          <img src={projeto.imagem} />
          <tag>{projeto.tags}</tag>
          <h2>{projeto.nome}</h2>
          <p>{projeto.content}</p>
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
          <img className="aspasinvertido rodaraspas" src="/src/assets/aspas.png" alt="aspas" />
          <div>
            <p>"A evolução não é instantânea, mas inevitável quando há curiosidade e persistência."</p>
            <p>— Carl Sagan</p>
          </div>
          <img src="/src/assets/aspas.png" alt="aspas" />
        </aside>
        <article>
          <h1 className="titulos"><span>#</span>projects <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
          {exibeprojeto()}
        </article>
        <article>
          <h1 className="titulos"><span>#</span>skills <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
        </article>
        <article>
          <h1 className="titulos"><span>#</span>about-me <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
        </article>
        <article>
          <h1 className="titulos"><span>#</span>contacts <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
        </article>

      </main>
      <footer></footer>
    </div>
  );
}
export default Home;
