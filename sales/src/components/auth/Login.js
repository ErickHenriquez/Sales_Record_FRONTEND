import React, {useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = (props) => {
    
    const {handleUser} = props
    let history = useHistory();


    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
 
    // extraer de usuario
    const { email, password } = usuario;
 
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    

     // Verificar login
     const urlBase = "http://localhost:8080/api/user/login"
     const getLoginUser = async () => {
        // POST request using fetch with async/await
        try{
            const response = await axios({
                    method: 'post',
                    url: urlBase,
                    params: {
                        email: email,
                        password: password
                      }
                  });
            //console.log(response.data);
            //console.log("El nombre de usuario es: " + response.data.name);
            usuario.id = response.data.id;
            usuario.name = response.data.name;
            usuario.password = null;
            handleUser(usuario);
            history.push('/dashboard');
        }
        catch (error){
            alert("El usuario y/o contraseña es incorrecto, intentelo nuevamente.");
            console.error(error);
        }
    }
 
     // Cuando el usuario quiere iniciar sesión
     const onSubmit = e => {
         e.preventDefault();
 
         // Validar que no haya campos vacios
         if(email.trim() === '' || password.trim() === '') {
            alert("Los campos no deben ser vacios");
         }
         else{
            getLoginUser();
         }  
     }

    return ( 

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            autoComplete="on"
                            onChange={onChange}
                            
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión"/>
                    </div>
                </form>

                <Link to={'/nuevaCuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;