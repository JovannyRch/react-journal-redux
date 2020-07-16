import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={LoginPage} />
                    <Route path="/auth/register" component={RegisterPage} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
