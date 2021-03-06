import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <>
            <h1 className="auth__title">Login</h1>
            <form>
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

                <button type="submit" className="btn btn-primary btn-block">
                    Iniciar sesión
                </button>
                <hr />
                <br />
                <div className="auth__social-networks">
                    <p>Iniciar sesión con Google</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <br />
                <Link to="/auth/register" className="link" >
                    Crear una cuenta nueva
                </Link>
            </form>
        </>
    )
}
