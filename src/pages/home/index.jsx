import { useState } from 'react'
import './style.css'
import Trash from '../../assets/excluir.png'


function Home() {
  const [count, setCount] = useState(0)

  const users = [{
    id: '23123h12hj21',
    name: 'Pedro',
    age: 23,
    email: 'pedro@gmail.com'
  },
  {
    id: '23123h12hjaas1',
    name: 'Marcos',
    age: 65,
    email: 'marco23@gmail.com'
  },
  {
    id: '23123h12h12fsas1',
    name: 'Marcela',
    age: 35,
    email: 'marcela23@gmail.com'
  },
  {
    id: '23123h12h232321as1',
    name: 'Maria Laura',
    age: 18,
    email: 'marcela23@gmail.com'
  }
  ]
  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder='Nome' type="text" name="nome" id="" />
        <input placeholder='Idade' type="number" name="idade" id="" />
        <input placeholder='E-mail' type="email" name="email" id="" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div className='card' key={user.id} >
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>

  )
}
export default Home
