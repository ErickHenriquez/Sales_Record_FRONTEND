import React from 'react';

const User = (props) => {

    console.log(props.user)
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
            <div className="d-flex flex-row bd-highlight mt-3 mb-3">
                <div className="p-2 bd-highlight"><h1>Hola!</h1></div>
            </div>
        </div>
     );
}
 
export default User;