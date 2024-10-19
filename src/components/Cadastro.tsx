import styles from '../styles/Cadastro.module.css';

export const Cadastro = () => {
  return (
    <main className={styles.container}>
      <section>
        <img src="/assets/images/section_esquerda.png" alt="" />
      </section>
      <section className={styles.form}>
        <h2>Cadastro</h2>
        <div className={styles.formContent}>
          <label>Nome:</label>
          <input type="text" />
          <label>E-mail institucional:</label>
          <input type="email" />
          <label>E-mail secundário:</label>
          <input type="email" />
          <label>Data de nascimento:</label>
          <input type="date" />
          <label>Senha:</label>
          <input type="password" />
        </div>
        <div className={styles.formCTA}>
          <button className={styles.btnLogin}>Cadastrar</button>
          <a href="/login">
            <i className="fa-solid fa-arrow-left"></i> desejo fazer login
          </a>
        </div>
      </section>
    </main>
  );
};
