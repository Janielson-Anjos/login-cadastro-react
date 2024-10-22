import React from 'react';
// import styles from '../styles/Login.module.css';
import imagem from '../assets/images/section_direita.png'
import { HiOutlineArrowRight } from "react-icons/hi";


const Login: React.FC = () => {
    return (
        <main className='container'>
            <section className="form">
                <h2>Login</h2>
                <div className="form-conteudo">
                    <label id="label-login">E-mail institucional:</label>
                    <input type="email" />
                    <label id="label-login">Senha:</label>
                    <input type="password" />
                </div>
                <div className="form-opcoes">
                    <div>
                        <input id="imput-remenber" type="checkbox" />
                        <label id="label-login-remember">Lembrar de mim</label>
                    </div>
                    <a id="a-esqueceu-senha" href="">Esqueceu a senha?</a>
                </div>
                <div className="form-cta">
                    <button className="btn-login" type="submit">Login</button>
                    <a className="a-cadastro" href="cadastro.html">desejo fazer cadastro <HiOutlineArrowRight style={{ fontSize: '18px'}} />
                    </a>
                </div>
            </section>
            <section>
                <img src={imagem} alt="" />
            </section>
        </main>
    );
};

export default Login;
