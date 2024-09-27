import { useState } from "react"


export default function Formulario(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState()
    const [usuario, setUsuario] = useState({})

    function registrar(evento){
        evento.preventDefault()
        setUsuario({
            nome: nome,
            email: email,
            idade: idade
        })
    }
  
    return(
        <div>
            <form onSubmit={registrar}>
                <h1>Cadastrando usuário</h1>
                <label htmlFor="txtnome">Nome:</label>
                <input type="text" id="txtnome" placeholder="Digite seu nome" value={nome} onChange={(evento)=>{setNome(evento.target.value)}}/> <br/> <br/>

                <label htmlFor="txtemail">Email:</label>
                <input type="email" id="txtemail" placeholder="Digite seu email" value={email} onChange={(evento)=>{setEmail(evento.target.value)}}/><br/> <br/>

                <label htmlFor="idade">Idade</label>
                <input type="number" id="idade" value={idade} onChange={(evento)=>{setIdade(evento.target.value)}}/><br/> <br/>

                <button>Registrar</button>
            </form>

            <div>
                <span> Bem vindo: {usuario.nome} !</span><br/> <br/>
                <span>Email: {usuario.email}</span><br/> <br/>
                <span>Idade: {usuario.idade} </span><br/> <br/>
            </div>
        </div>
    )
}