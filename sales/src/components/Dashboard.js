import React from 'react';
import 'primeflex/primeflex.css';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {

    console.log(props.user)

    return (
        <div className="container pt-4">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to={'/user'} className="enlace-cuenta nav-link" user={props.user}>
                                    Usuario
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link to={'/productos'} className="enlace-cuenta nav-link" user={props.user}>
                                    Productos
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="d-flex flex-row bd-highlight mt-3 mb-3">
                <div className="p-2 bd-highlight"><h1>Bienvenido, {props.user.name}</h1></div>
            </div>
        </div>
        
     );
}
 
export default Dashboard;