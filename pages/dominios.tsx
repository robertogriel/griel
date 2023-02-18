import { useState } from "react";
import { HtmlHead } from "../components/Html/Head";
import Main from "../components/Html/Main";
import styles from "../styles/Domains.module.scss";
import {  MdCancel, MdCheckCircle, MdSearch } from "react-icons/md";

const Dominios: React.FC = () => {
  const [domainInput, setDomainInput] = useState<string>("");

  const checkDomain = async () => {
    if (!domainInput) return;

    //const domain = 'teste12.com.br'
    const response = await fetch(`api/domains?q=${domainInput}`);
    //const data = await response.json();
  };

  return (
    <Main>
      <HtmlHead
        title="<Domínios /> ● Griel Developer"
        metaDescription="Consulte aqui a disponibilidade de um domínio."
      />

      <header className={styles.domains}>
        <h1>Domínios</h1>
        <p>Consulte aqui a disponibilidade de um domínio.</p>
      </header>
      <section className={styles.domainForm}>
        <div className={styles.inputArea}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ex.: www.dominio.com.br"
            name="domain"
            defaultValue={domainInput}
            onChange={(e) => setDomainInput(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button className={styles.button} onClick={checkDomain}><MdSearch fontSize={25} /></button>
        </div>
      </section>
      <section className={styles.domainResult}>
        <div className={styles.result}>
          <div className={styles.resultIcon}>
            <MdCheckCircle fontSize={50} color="var(--success)"/>
          </div>
          <div className={styles.resultText}>
            <h2>dominio.com.br</h2>
            <p>Disponível</p>
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.resultIcon}>
            <MdCancel fontSize={50} color="var(--fail)" />
          </div>
          <div className={styles.resultText}>
            <h2>dominio.com.br</h2>
            <p>Indisponível</p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Dominios;
