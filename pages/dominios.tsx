import { useState } from "react";
import { HtmlHead } from "../components/Html/Head";
import Main from "../components/Html/Main";
import styles from "../styles/Domains.module.scss";
import { MdCancel, MdCheckCircle, MdSearch } from "react-icons/md";
import Loading from "../components/Loading";

const Dominios: React.FC = () => {
  const [domainInput, setDomainInput] = useState<string>("");
  const [domainTrim, setDomainTrim] = useState<string>("");
  const [domainResult, setDomainResult] = useState<boolean>(false);
  const [domainDotCom, setDomainDotCom] = useState<string | null>(null);
  const [domainDotComBr, setDomainDotComBr] = useState<string | null>(null);
  const [errorHandler, setErrorHandler] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const checkDomain = async () => {
    if (!domainInput) return;

    setDomainDotCom(null);
    setDomainDotComBr(null);
    setDomainResult(false);
    setErrorHandler(null);
    setLoading(true);

    let newDomain = "";

    const domainSplit = domainInput.split(".");
    if (domainSplit.length < 1) return;

    if (/www/i.test(domainSplit[0])) {
      newDomain = domainSplit[1];
    } else {
      newDomain = domainSplit[0];
    }

    setDomainTrim(newDomain);

    try {
      await fetch(`api/domains?q=${newDomain}.com`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setErrorHandler(data.message);
          } else {
            switch (data.res) {
              case "ok":
                setDomainDotCom("Disponível");
                break;
              case "nok":
                setDomainDotCom("Indisponível");
            }
            setLoading(false);
            setDomainResult(true);
          }
        });

      await fetch(`api/domains?q=${newDomain}.com.br`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setErrorHandler(data.message);
          } else {
            switch (data.res) {
              case "ok":
                setDomainDotComBr("Disponível");
                break;
              case "nok":
                setDomainDotComBr("Indisponível");
            }
            setLoading(false);
            setDomainResult(true);
          }
        });
    } catch (error: any) {
      setLoading(false);
      setErrorHandler(error.message);
    }
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
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                checkDomain();
              }
            }}
          />
          <button className={styles.button} onClick={checkDomain}>
            <MdSearch fontSize={25} />
          </button>
        </div>
      </section>
      {loading && <Loading height="100px" width="100px" />}
      {errorHandler && (
        <div className={styles.error}>
          <p>{errorHandler}</p>
        </div>
      )}
      {domainResult && (
        <section className={styles.domainResult}>
          <div className={styles.result}>
            <div className={styles.resultIcon}>
              <MdCheckCircle fontSize={50} color="var(--success)" />
            </div>
            <div className={styles.resultText}>
              <h2>{domainTrim}.com</h2>
              <p>{domainDotCom}</p>
            </div>
          </div>
          <div className={styles.result}>
            <div className={styles.resultIcon}>
              <MdCancel fontSize={50} color="var(--fail)" />
            </div>
            <div className={styles.resultText}>
              <h2>{domainTrim}.com.br</h2>
              <p>{domainDotComBr}</p>
            </div>
          </div>
        </section>
      )}
    </Main>
  );
};

export default Dominios;
