// Funcion para el estado
import { useState } from "react"
/* import style from './user.module.css'
import './user.scss'
 */
import styled from "styled-components"

const Avatar = styled.img `
    border: 10px solid black;
`



// Creamos la funcion

//Eventos en JS
//Element.addEventListener('click', ()=>{})


function User({ color, name, avatar, counter}){
    const [calculatedName, setCalculatedName] = useState(name)
    /* const [counter, setCounter] = useState(0) */

    const newName = `${calculatedName}, quien será tu maestro de informática`

    function onClick(){
        setCalculatedName(`Capitan América`)
        /* setCounter( counter + 1) */
        console.log(`hola ${name} Este es el resultado del evento Click`)
    }

    return (
        <div className="User" onClick={onClick}>
            <Avatar src={avatar} alt={name} title = {name} />
            <p className='paragraph'>Evento click by {newName} por {counter} veces</p>
        </div>
    )
}

export default User