import React from 'react'
import "../hojas-de-estilo/botones.css"

const boton = ({texto,funcion,esboton}) => {
  return (
    <div>
        <button className={esboton ? "boton-clic":"reiniciar"} onClick={funcion}>{texto}</button>
    </div>
  )
}

export default boton