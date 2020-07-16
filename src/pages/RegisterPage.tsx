import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <h1 className="auth__title">Sing Up</h1>
            <form>

                <input
                    type="text"
                    placeholder="Correo"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />



                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Confirma tu password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                />

                <button type="submit" className="btn btn-primary btn-block">
                    Registrarse
                </button>
                <hr />

                <br />
                <Link to="/auth/login" className="link" >
                    Iniciar sesión
                </Link>
            </form>
        </>
    )
}
