// Creamos la funcion
function User({name, avatar}){
    const newName = `${name} es el Capitan América`
    return (
        <div className="User">
            <img src={avatar} alt={name} title = {name} />
            <p>{newName}</p>
        </div>
    )
}

export default User