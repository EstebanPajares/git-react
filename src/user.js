// Creamos la funcion
function User({name, avatar}){

    const newName = `${name} es muy divertido`
    return(
        <div className="user">
            <img src={avatar} alt={newName} title={newName} />
            <p>{`Su nombre es:  ${newName}`}</p>
        </div>
    )
}

export default User