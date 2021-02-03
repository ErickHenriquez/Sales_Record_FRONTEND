import React from 'react';
import axios from 'axios';

const User = (props) => {

    //let history = useHistory();
    var historial = {}

    console.log(props.user)

    // Traer Historial de usuario
    const urlBase = "http://localhost:8080/api/record/user/"
    const getHistorial = async () => {
       try{
           const response = await axios({
                   method: 'get',
                   url: urlBase + props.user.id
                 });
           
           historial = response.data;
           console.log(historial);
           console.log(historial[0].movimiento);

           /*usuario.id = response.data.id;
           usuario.name = response.data.name;
           usuario.password = null;
           handleUser(usuario);*/
           //history.push('/dashboard');
       }
       catch (error){
           alert("El usuario y/o contraseña es incorrecto, intentelo nuevamente.");
           console.error(error);
       }
    }

    getHistorial()
    
    return ( 
        <div className="container pt-4">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/User">Usuario</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Productos">Productos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="d-block bd-highlight mt-3">
                    <h1 className="text-start mb-0 p-3">Nombre: {props.user.name}</h1>        
                    <h1 className="text-start mb-0 p-3">Correo: {props.user.email}</h1>
            </div>
            <div className="d-block bd-highlight mt-5 ">
                <h1 className="text-start mb-0 p-3">Historial:</h1>
                    {Object.keys(historial).map(key => (
                        
                        <p> {historial[key].movimiento} </p>
                    ))}
            </div>
        </div>
     );
}
 
export default User;