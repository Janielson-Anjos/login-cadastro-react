// import styles from '../styles/Login.module.css';

// export const Login = () => {
//   return (
//     <main className={styles.container}>
//       <section className={styles.form}>
//         <h2>Login</h2>
//         <div className={styles.formContent}>
//           <label>E-mail institucional:</label>
//           <input type="email" />
//           <label>Senha:</label>
//           <input type="password" />
//         </div>
//         <div className={styles.formOptions}>
//           <div>
//             <input type="checkbox" id="remember" />
//             <label htmlFor="remember">Lembrar de mim</label>
//           </div>
//           <a href="#">Esqueceu a senha?</a>
//         </div>
//         <div className={styles.formCTA}>
//           <button className={styles.btnLogin}>Login</button>
//           <a href="/cadastro" className={styles.aCadastro}>
//             desejo fazer cadastro
//           </a>
//         </div>
//       </section>
//       <section>
//         <img src="assets/imagens/section_direita.png" alt="" />
//       </section>
//     </main>
//   );
// };


// src/components/Login.tsx
import React from 'react';

const Login: React.FC = () => {
    return (
        <main>
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
                    <a className="a-cadastro" href="cadastro.html">desejo fazer cadastro</a>
                </div>
            </section>
            <section>
                <img src="/assets/images/section_direita.png" alt="" />
            </section>
        </main>
    );
};

export default Login;
