import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="conteiner-fluid my-4 p-4">
            <div className="row">
                <div className="col text-center">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={'/'} activeclassname="active">Todos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={'/categoria/urbanas'} activeclassname='active'>Urbanas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={'categoria/lisas'} activeclassname='active'>Lisas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={'categoria/botitas'} activeclassname='active'>Botitas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;