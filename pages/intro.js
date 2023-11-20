import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai"
import styles from "dev/styles/Intro.module.css";

const Intro = () => {
  return (
    <>
      <Head>
        <title>Introducción</title>
      </Head>
      <div className={styles.container_intro}>
        <span className={styles.counter}>1</span>
        <Link href="/">
           <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>1</span>
        <div className={styles.descriptionContainer_intro}>
          <p className={styles.description_intro}>
            Hablemos un poco de HTML, ¿Que es HTML?
          </p>
          <p className={styles.description_intro}>
            HTML, significa "Lenguaje de Marcado de Hipertexto" en inglés
            (Hypertext Markup Language), es el estándar utilizado para la
            creación y el diseño de páginas web. Desarrollado por el World Wide
            Web Consortium (W3C), HTML proporciona una estructura básica para el
            contenido en la web, permitiendo a los desarrolladores web definir y
            organizar el contenido de una página.
          </p>
        </div>
        <Link href="/page2">
            <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Intro;
