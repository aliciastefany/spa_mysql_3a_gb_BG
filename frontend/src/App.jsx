import { useEffect, useState } from "react"
import axios from "axios"

function App(){
  const [alunos, setAlunos] = useState([])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [curso, setCurso] = useState("")

  const [editando, setEditando] = useState(false)
  const [idAtual, setIdAtual] = useState(null)

  async function salvar(e){
    e.preventDefault()
    const aluno = [nome, email, curso]

    if(editando){
      await axios.put(`https://cuddly-fortnight-9w94wv4r4g6f95xp-3001.app.github.dev/alunos/${idAtual}`,aluno)
      console.log(aluno)
      setEditando(false)
      setIdAtual(null)
    } else {
      await axios.post("https://cuddly-fortnight-9w94wv4r4g6f95xp-3001.app.github.dev/alunos", aluno)
      //limparFormulario()
      //buscarAlunos()
    }
  }

  return(
    <div style={{padding:20}}>
      <h1>CRUD de Alunos</h1>

      <form onSubmit={salvar}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(texto)=>setNome(texto.target.value)}
        />
        <br/>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(texto)=>setEmail(texto.target.value)}
        />
        <br/>
        <input
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={(texto)=>setCurso(texto.target.value)}
        />
        <br/>
        <button type="submit">
          {editando ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  )
}

export default App