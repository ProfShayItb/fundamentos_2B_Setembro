import Primeiro from "./components/primeiro/Primeiro"

import Nome from "./components/nome/Nome"
import ComParametro from "./components/basicos/ComParamestros"
import NumeroAleatorio from "./components/primeiro/NumeroAleatorio"
import Modelo from "./components/modelo/Modelo"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import imagem1 from './assets/images/lua.jpg'
import Exercicio from "./components/exercicio/Exercicio"

function App() {

  // JS padrão
  
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
    
      
      
      <div className="cards">
      
      <Modelo titulo="Exercício" color="#67e689">
        <Exercicio/>
      </Modelo>

      <Modelo titulo="Inserindo imagem" color="orange">
        <img src={imagem1} alt="Lua" width={200}/>
      </Modelo>

      <Modelo titulo="Repetição" color="blue">
        <ListaAlunos/>
      </Modelo>

        <Modelo titulo="Numero Aleatorio">
        <NumeroAleatorio min={100} max={1000}></NumeroAleatorio>
        <NumeroAleatorio min={50} max={100}></NumeroAleatorio>
        <NumeroAleatorio min={0} max={10}></NumeroAleatorio>
        </Modelo>

        <Modelo titulo="Com Parametro" color='navy'>
        <ComParametro titulo="Kleber" subtitulo="Machado"></ComParametro>
        </Modelo>

        <Modelo titulo="Nombre">
        <Nome></Nome>
        </Modelo>
      </div>
    </div>
  
  )
}

export default App