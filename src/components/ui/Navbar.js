import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContex } from '../../auth/AuthContex'
import { types } from '../../types/types';



export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContex);
    const history = useHistory();

    const handleLogout = ()=>{
        dispatch({
            type: types.logout
        });
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand"
                to="/" >
                Asociaciones
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>
                    <button
                        activeclassname="active"
                        className="nav-item nav-link btn"
                        to="/login"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}