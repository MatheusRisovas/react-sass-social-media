import React from 'react'

export default function Landing() {
  return (
    <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">Dev Connector</h1>
                <p className="lead">Crie seu portifólio / perfil de desenvolvedor, compartilhe
                posts e consiga ajuda de outros desenvolvedores.
                </p>
                <div className="buttons">
                    <a href="register" className="btn btn-primary">Cadastro</a>
                    <a href="login" className="btn btn">Login</a>
                </div>
            </div>
        </div>
    </section>
  )
}
