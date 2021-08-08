import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContex } from '../auth/AuthContex';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const { user } = useContext( AuthContex );

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                     exact
                     path= "/login" 
                     component= { LoginScreen}
                     isAuthenticaded={user.logged}
                     />
                    <PrivateRoute
                    path="/" 
                    component={DashboardRoutes} 
                    isAuthenticaded={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
