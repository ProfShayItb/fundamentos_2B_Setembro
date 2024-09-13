import './Modelo.css'

export default function Modelo(props){

    const estilo = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00'
    }

    return(
        <div className='card' style={estilo}> 
            <div className='titulo'>{props.titulo}</div>
            <div className='conteudo'>{props.children}</div>
        </div>
    )
}