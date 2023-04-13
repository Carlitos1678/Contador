import Boton from './componentes/Boton';
import "./App.css"
import Numeros from './componentes/Numeros';
import { useState } from 'react';


function App() {
  const [estado,setestado]= useState(0)


  const manejar = ()=>{
    console.log("Funcion para manejar los clic")
    setestado(estado+1)
  }
  const reiniciarboton =()=>{
    console.log("la gorda gusta de kiara")
    setestado(0)
  }
  return (
    <div className="App">
     
      <div> 
        <Numeros
          clic={estado}/>
        <Boton 
        texto={"Clik"}
        esboton={true}
        funcion={manejar}/>
        <Boton
        texto={"Reiniciar"}
        esboton={false}
        funcion={reiniciarboton}/>
        
        
      </div>
      
    </div>
  );
}

export default App;
