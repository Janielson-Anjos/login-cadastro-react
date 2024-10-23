import React, {useState} from 'react';
// import styles from '../styles/Login.module.css';
import imagem from '../../assets/images/section_direita.png';
import { HiOutlineArrowRight } from "react-icons/hi";
import './login.css';
import axios from 'axios';

const BASE_URL = "http://localhost:3000/Usuario";


const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const loginUsuario = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { emailInstitucional: email, senha });
            console.log('Login bem-sucedido:', response.data);
            alert("Login bem-sucedido!");
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            // Aqui você pode mostrar uma mensagem de erro ao usuário
        }
    }

    return (
        <main className='container'>
            <section className="form">
                <h2>Login</h2>
                <div className="form-conteudo">
                    <label id="label-login">E-mail institucional:</label>
                    <input type="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label id="label-login">Senha:</label>
                    <input type="password" value={senha} 
                        onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div className="form-opcoes">
                    <div className='checkbox-remember'>
                        <input id="imput-remenber" type="checkbox" />
                        <label id="label-login-remember">Lembrar de mim</label>
                    </div>
                    <a id="a-esqueceu-senha" href="">Esqueceu a senha?</a>
                </div>
                <div className="form-cta">
                    <button className="btn-login" type="button" onClick={loginUsuario} >Login</button>
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
