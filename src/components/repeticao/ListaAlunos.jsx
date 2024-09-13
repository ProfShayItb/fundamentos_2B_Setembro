
import alunos from '../repeticao/alunos'


export default function ListaAlunos(){

    const lista = alunos.map( (pessoa)=>{
        return(
            <li key={pessoa.id}>
                {pessoa.id} - {pessoa.nome} - {pessoa.nota}

            </li>
        )

    })

    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}