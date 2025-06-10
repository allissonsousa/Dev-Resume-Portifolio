import { useState } from 'react'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input type="text" name="nome" id="" />
        <input type="number" name="idade" id="" />
        <input type="email" name="email" id="" />
        <button>Cadastrar</button>
      </form>
      
      <div>
        <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>E-mail: </p>
        </div>
        <button><img src="" alt="" /></button>
        <div></div>
      </div>
    </div>
  )
}
export default Home
