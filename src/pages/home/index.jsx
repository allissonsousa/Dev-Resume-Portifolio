import { useState } from "react";
import "./stylePC.css";
import "./styleCELL.css";
import { useRef } from "react";
import { animationControls, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import aboutperfil from "/src/assets/aboutperfil.png";
import analisedados from "/src/assets/analisedados.png";
import dadosfinanceiros from "/src/assets/dados-financeiros.jpeg";
import speed from "/src/assets/speed.png";
import skil from "/src/assets/skil.png";
import selecao from "/src/assets/selecao.png";
import discordia from "/src/assets/discordia.png";
import github from "/src/assets/github.png";
import mail from "/src/assets/mail.png";
import simbol from "/src/assets/simbol.png";
import perfil from "/src/assets/perfil.png";
import malha from "/src/assets/malha.png";
import menoslinha from "/src/assets/menos-linha-reta-horizontal.png";
import linkedin from "/src/assets/linkedin.png";
import linha from "/src/assets/linha.png";
import aspas from "/src/assets/aspas.png";
import carregando from "/src/assets/carregando.png";
import ptstudo from "src/assets/pythonstudies.png"
import { delay } from "framer-motion/dom";

// Componente de carregamento, tela toda, frase e imagem
function CarregandoPagina() {
  return (
    <div className="carregando somecarregamento">
      <article>
        <img src={carregando} alt="loading" />
        <h1 id="frasecarregamento">Transformando sonhos em códigos</h1>
      </article>
    </div>
  );
}

//Exibição dos projetos ao rolar a tela até eles
function Exibeprojeto() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const projetos = [
    {
      id: 1,
      imagem: analisedados,
      nome: "Saúde Quest",
      content: "Análise de dados públicos com python ",
      tags: "Python API AI SQL Excel",
      linque: "https://github.com/allissonsousa/Health-Data-Py",
    },
    {
      id: 2,
      imagem: dadosfinanceiros,
      nome: "Finance View",
      content: "Acompanhador de valores da bolsa atual com Cruds em Java",
      tags: "JAVA Spring SQL Docker",
      linque: "https://github.com/allissonsousa/Finance-Base-Java",
    },
    {
      id: 3,
      imagem: speed,
      nome: "Speed Timer",
      content: "Cronometro para cubo mágico com métricas ",
      tags: "HTML CSS JavaScript ",
      linque:
        "https://allissonsousa.github.io/SpeedCubee-Timer/pages/home.html",
    },
    {
      id: 4,
      imagem: ptstudo,
      nome: "Python Study",
      content: "Estudos e testes realizados com python",
      tags: "Python Excel SQL Pandas",
      linque: "https://github.com/allissonsousa/Python-Study",
    },
  ];
  return (
    <div ref={ref} className="projetos">
      {projetos.map((projeto, i) => (
        <motion.div
          className={"projeto"} // sempre tem a classe projeto
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: i * 0.2 },
            }, // só ativa a classe
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <img src={projeto.imagem} alt="Foto do Projeto" />
          <div>{projeto.tags}</div>
          <h2>{projeto.nome}</h2>
          <p>{projeto.content}</p>
          <a href={projeto.linque} target="_blank" rel="noopener noreferrer">
            Ver projeto{">>> "}
          </a>
        </motion.div>
      ))}
    </div>
  );
}

//Exibição das habilidades
function Habilidades() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  const habilidades = [
    {
      id: 3,
      habilitty: "Ferramentas",
      tecnologia: "VSCode  Figma  Git  Excel  PowerBI  Pycharm  InteliJ",
    },
    {
      id: 1,
      habilitty: "Linguagens",
      tecnologia: "Python  React  Java  JavaScript ",
    },
    {
      id: 2,
      habilitty: "DataBases",
      tecnologia: "SQL Server  MySQL  MongoBD",
    },
    { id: 4, habilitty: "Outros", tecnologia: "HTML  CSS  ADM" },
  ];
  return (
    <div ref={ref} className="habilidades">
      <img src={skil} alt="skillmod" />
      <div className="cast">
        {habilidades.map((habilidade, i) => (
          <motion.div
            className="habilidade"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                height: "min-content",
                transition: { duration: 0.5, delay: i * 0.4 },
              }, // só ativa a classe
              hidden: { opacity: 1, height: "40px" },
            }}
          >
            <p id="titulohabilidade">{habilidade.habilitty}</p>
            <p>{habilidade.tecnologia}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
//Exibição do rodapé
function Rodape() {
  return (
    <footer>
      <aside>
        <div id="AskAI">
          <p>Ask AI</p>
          <input type="text" />
        </div>
        <div id="AiResponse"></div>
        <p>© 2025 All rights by Allisson Sousa</p>
      </aside>
    </footer>
  );
}
//funçao principal que exporta a pagina
function Home() {
  const home = useState(false);
  const sectionsRef = {
    Home: useRef(null),
    Projects: useRef(null),
    About: useRef(null),
    Contact: useRef(null),
    Skills: useRef(null),
  };
  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="corpo">
      <CarregandoPagina />
      <header id="cabeçalho">
        <div id="menucompacto"></div>
        <div id="allissonsimbolo">
          <img src={selecao} alt="simbolo" />
          Allisson
        </div>
        <div id="navegacao">
          <div onClick={() => scrollToSection("Home")}>
            <span>#</span>home
          </div>
          <div onClick={() => scrollToSection("Projects")}>
            <span>#</span>trabalhos
          </div>
          <div onClick={() => scrollToSection("Skills")}>
            <span>#</span>skills
          </div>
          <div onClick={() => scrollToSection("About")}>
            <span>#</span>sobre
          </div>
          <div onClick={() => scrollToSection("Contact")}>
            <span>#</span>contate-me
          </div>
        </div>
      </header>
      <div className="contatosfixo somecell">
        <img id="linha" src={linha} alt="linha" />
        <a href="" target="_blank">
          <img src={discordia} alt="discord" />
        </a>
        <a href="https://github.com/allissonsousa" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="mailto:allissonsousa7@outlook.com" target="_blank">
          <img src={mail} alt="e-mail" />
        </a>
      </div>
      <div ref={sectionsRef.Home} height="50px"></div>
      <div id="main">
        <article className="sobremim">
          <article className="resumo">
            <h1>
              Sou um desenvolvedor <span>full stack</span> <br />
              dando <span>os primeiros passos</span> no mercado
            </h1>
            <p id="efeito">
              "Criatividade e inovação sempre andam de mãos dadas"
            </p>
            <div id="contateme" className="somecell">
              Contate-me!!
            </div>
          </article>
          <article className="usuario">
            <img id="simbolofoto" src={simbol} alt="simbolo" />
            <img id="foto" src={perfil} alt="perfil" />
            <p id="workingon">
              <span>#</span>Atualmente -- estudando JAVA
            </p>
            <img id="pontofoto" src={malha} alt="pontos" />
          </article>
        </article>
        <article className="slogan">
          <img className="aspasinvertido rodaraspas" src={aspas} alt="aspas" />
          <div>
            <p>
              "A evolução não é instantânea, mas inevitável quando há
              curiosidade e persistência."
            </p>
            <p>— Carl Sagan</p>
          </div>
          <img src={aspas} alt="aspas" />
          <div ref={sectionsRef.Projects} height="100px"></div>
        </article>
        <article>
          <h1 className="titulos">
            <span>#</span>projects{" "}
            <span>
              <img src={menoslinha} alt="menos" />
            </span>
          </h1>
          <Exibeprojeto />
          <div ref={sectionsRef.Skills}></div>
        </article>
        <article id="titles">
          <h1 className="titulos">
            <span>#</span>skills{" "}
            <span>
              <img src={menoslinha} alt="menos" />
            </span>
          </h1>
          <Habilidades />
        </article>
        <article ref={sectionsRef.About} className="sobre">
          <div>
            <h1 className="titulos">
              <span>#</span>about-me{" "}
              <span>
                <img src={menoslinha} alt="menos" />
              </span>
            </h1>
            <p>
              Sou programador em início de carreira, com conhecimentos em
              Python, Java, SQL e desenvolvimento web (HTML, CSS e React). Já
              realizei projetos pessoais e acadêmicos que envolvem interfaces
              responsivas e manipulação de dados, sempre buscando aprender mais
              e entregar soluções práticas.
            </p>
            <p>
              Estou iniciando na área de programação e disponível para colaborar
              em projetos de desenvolvimento web, automações e integrações com
              banco de dados. Busco aprender e crescer junto com os desafios,
              oferecendo dedicação e comprometimento em cada oportunidade.
            </p>
          </div>
          <div>
            <img className="perf" src={aboutperfil} alt="pontos" />
          </div>
        </article>
        <article id="contactsartigo" ref={sectionsRef.Contact}>
          <h1 className="titulos">
            <span>#</span>contacts{" "}
            <span>
              <img src={menoslinha} alt="menos" />
            </span>
          </h1>
          <div id="Contatos">
            <div id="falecomigo">
              <p>
                Estou aberto a novas oportunidades como programador, sejam
                projetos pontuais ou posições efetivas.
              </p>
              <p>
                Sinta-se à vontade para me contatar ou conhecer mais através das
                minhas redes sociais.
              </p>
            </div>
            <div id="enviemensagem">
              <p>Me envie uma mensagem!!</p>
              <a
                href="https://www.linkedin.com/in/allisson-sousa-7b8b1b1b1/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:allissonsousa7@outlook.com" target="_blank">
                <img src={mail} alt="mail" />
              </a>
              <a
                href="https://discordapp.com/users/692403383868588066"
                target="_blank"
              >
                <img src={discordia} alt="discord" />
              </a>
            </div>
          </div>
        </article>
      </div>
      <Rodape />
    </div>
  );
}
export default Home;
