import { useState,useEffect } from 'react'
import './style.css'
import Trash from '../../assets/excluir.png'


function Home() {
  const home = useState(false)
  return (
    <body>
      <nav>navegação</nav>
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
