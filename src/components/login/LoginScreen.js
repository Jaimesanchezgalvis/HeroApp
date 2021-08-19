import React, { useContext } from 'react'
import { AuthContex } from '../../auth/AuthContex'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContex);

    const handleLogin = () => {
     
        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type: types.login,
            payload: {
                name: 'Jaime'
            }
        });
        
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
