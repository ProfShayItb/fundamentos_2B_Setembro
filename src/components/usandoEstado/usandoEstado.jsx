//Usando Hook useState


import { useState } from "react";


export default function UsandoEstado(){
    
    

    const [nome, setNome] = useState('Ana')

    function trocarNome(nome){
        setNome(nome)
    }
    
    return(
        <div>
            <h2>Bem vindo(a) {nome}!!</h2>
            <button onClick={()=>{trocarNome('Maria')}}>Trocar Nome</button>
        </div>
    )
}
