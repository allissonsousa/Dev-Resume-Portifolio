import { useState } from "react";
import "./style.css";
import { useRef } from "react";
import { useEffect } from "react";


function exibeprojeto() {
  const projetos = [
    { id: 1, imagem: "src/assets/analisedados.png", nome: "Saúde Quest", content: "Análise de dados com python usando dados do sistema único de saúde", tags: "Python Pandas AI SQL Excel" },
    { id: 2, imagem: "src/assets/dados-financeiros.jpeg", nome: "Finance View", content: "Criação de um acompanhador de valores da bolsa atual com Cruds em Java", tags: "JAVA Springboot Spring SQL Docker" },
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

function habilidades() {
  const habilidades = [
    { id: 1, habilitty: "Linguagens", tecnologia: "Python  React  Java  JavaScript " },
    { id: 2, habilitty: "Banco de Dados", tecnologia: "SQL Server  MySQL  MongoBD" },
    { id: 3, habilitty: "Ferramentas", tecnologia: "VSCode  Figma  Git  Excel  PowerBI  Pycharm  InteliJ" },
    { id: 4, habilitty: "Outros", tecnologia: "HTML  CSS  ADM" }
  ];
  return { habilidades.map(habilidade) => (
    <div>

    </div>
  )
}
}
//funçao principal que exporta a pagina 
function Home() {
  const home = useState(false);
  const sectionsRef = {
    Home: useRef(null),
    Projects: useRef(null),
    About: useRef(null),
    Contact: useRef(null),
    Skills: useRef(null)
  };
  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div id="corpo">
      <header id="cabeçalho">
        <div><img src="src/assets/selecao.png" alt="simbolo" />Allisson</div>
        <div id="navegacao">
          <div onClick={() => scrollToSection("Home")}><span>#</span>home</div>
          <div onClick={() => scrollToSection("Projects")}><span>#</span>trabalhos</div>
          <div onClick={() => scrollToSection("Skills")}><span>#</span>skills</div>
          <div onClick={() => scrollToSection("About")}><span>#</span>sobre</div>
          <div onClick={() => scrollToSection("Contact")}><span>#</span>contate-me</div>
        </div>
      </header>
      <div className="contatosfixo" >
        <img id="linha" src="src/assets/linha.png" alt="linha" />
        <a href="" target="_blank"><img src="src/assets/discordia.png" alt="discord" /></a>
        <a href="https://github.com/allissonsousa" target="_blank"><img src="src/assets/github.png" alt="github" /></a>
        <a href="mailto:allissonsousa7@outlook.com" target="_blank"><img src="src/assets/mail.png" alt="e-mail" /></a>
      </div>
      <main ref={sectionsRef.Home}>
        <aside className="sobremim" >
          <article className="resumo">
            <h1>Sou um desenvolvedor <span>full stack</span> <br />dando <span>os primeiros passos</span> no mercado</h1>
            <p id="efeito">"Criatividade e inovação sempre andam de mãos dadas"</p>
            <div id="contateme">Contate-me!!</div>
          </article>
          <article className="usuario">
            <img id="simbolofoto" src="src/assets/simbol.png" alt="simbolo" />
            <img id="foto" src="src/assets/perfil.png" alt="perfil" />
            <p id="workingon"><span>#</span>Atualmente -- estudando JAVA</p>
            <img id="pontofoto" src="/src/assets/malha.png" alt="pontos" />
          </article>
        </aside>
        <aside className="slogan">
          <img className="aspasinvertido rodaraspas" src="src/assets/aspas.png" alt="aspas" />
          <div >
            <p>"A evolução não é instantânea, mas inevitável quando há curiosidade e persistência."</p>
            <p>— Carl Sagan</p>
          </div>
          <img ref={sectionsRef.Projects} src="src/assets/aspas.png" alt="aspas" />
        </aside>
        <article ref={sectionsRef.Skills}>
          <h1 className="titulos"><span>#</span>projects <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
          {exibeprojeto()}
        </article>
        <article ref={sectionsRef.About}>
          <h1 className="titulos"><span>#</span>skills <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
        </article>
        <article >
          <div>
            <h1 className="titulos"><span>#</span>about-me <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
            <p>Sou um programador em início de carreira com sólida base em linguagens como Python, Java e SQL, além de experiência prática com desenvolvimento
              web utilizando HTML, CSS e React. Já desenvolvi projetos pessoais e acadêmicos que envolvem desde criação de interfaces responsivas até manipulação
              de dados em bancos relacionais. Tenho facilidade para aprender novas tecnologias, foco em entregar código limpo e estou sempre buscando soluções práticas
              para os desafios que surgem.</p>
            <p>Atualmente estou disponível para trabalhos freelance e me coloco à disposição para colaborar em projetos de desenvolvimento web, automações,
              integrações com banco de dados e outras demandas de programação. Se você procura alguém comprometido, comunicativo e com vontade de crescer
              junto com o projeto, será um prazer contribuir. Para mais informações ou para conversarmos sobre possíveis parcerias, estou à disposição para
              contato.</p>
          </div>
          <div ref={sectionsRef.Contact}>
            <img src="src/assets/pontos.png" alt="pontos" />
            <img src="src/assets/perfil.png" alt="perfil" />
            <img src="src/assets/pontos.png" alt="pontos" />
            <img src="src/assets/linha.png" alt="linha" />
          </div>
        </article>
        <article >
          <h1 className="titulos"><span>#</span>contacts <span><img src="src/assets/menos-linha-reta-horizontal.png" alt="linha" /></span></h1>
          <div>
            <p>Estou aberto a novas oportunidades como programador, sejam projetos pontuais ou posições efetivas.</p>
            <p>Sinta-se à vontade para me contatar ou conhecer mais através das minhas redes sociais.</p>
          </div>
          <div>
            <p>Me envie uma mensagem!!</p>
            <a href="https://www.linkedin.com/in/allisson-sousa-7b8b1b1b1/" target="_blank"><img src="src/assets/linkedin.png" alt="linkedin" /></a>
            <a href="mailto:allissonsousa7@outlook.com" target="_blank"><img src="src/assets/mail.png" alt="mail" /></a>
            <a href="" target="_blank"><img src="src/assets/discordia.png" alt="discord" /></a>
          </div>
        </article>
      </main>
      <footer>
        <div>
          <p>Aks AI</p>
          <input type="text" />
        </div>
        <div id="AiResponse"></div>
        <p>© 2025 Allisson Sousa</p>
      </footer>
    </div>
  );
}
export default Home;

