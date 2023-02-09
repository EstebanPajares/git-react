// Creamos la funcion

//Eventos en JS
//Element.addEventListener('click', ()=>{})


function User({name, avatar}){
    const newName = `${name} es el Capitan América`

    function onClick(){
        console.log(`hola ${name} Este es el resultado del evento Click`)
    }

    return (
        <div className="User" onClick={onClick}>
            <img src={avatar} alt={name} title = {name} />
            <p>{newName}</p>
        </div>
    )
}

export default User