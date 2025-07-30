import { useState,useEffect } from 'react'
import './style.css'
import Trash from '../../assets/excluir.png'

function navegcao(){
  const navega = (<header>
    <p>Allisson Sousa</p>
    <ul>
      <li>#home</li>
      <li>#trabalhos</li>
      <li>#sobre mim</li>
      <li>#contate</li>
    </ul>
  </header>);
  return navega;
}

function describe(){
  return (
    <h1></h1>
  )
}

function Home() {
  const home = useState(false)
  return (
    <body>
      <aside>nome e foto</aside>
      <p>slogan</p>
      <article >projetos
        <div></div>
        <div></div>
        <div></div>
      </article>
      <article>skills</article>
      <article>about</article>
      <article>contact</article>
      <footer></footer>
    </body>
  )
}
export default Home
