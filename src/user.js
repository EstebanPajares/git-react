// Funcion para el estado
import { useState } from "react"

// Creamos la funcion

//Eventos en JS
//Element.addEventListener('click', ()=>{})


function User({name, avatar, counter}){
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
            <img src={avatar} alt={name} title = {name} />
            <p>Evento click by {newName} por {counter} veces</p>
        </div>
    )
}

export default User