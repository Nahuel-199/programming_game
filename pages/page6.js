import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page6.module.css";

const Page6 = () => {
  return (
    <>
      <Head>
        <title>Deducción</title>
      </Head>
      <div className={styles.container_page6}>
        <span className={styles.counter}>6</span>
        <Link href="/page5">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>6</span>
        <div className={styles.descriptionContainer_page6}>
          <p className={styles.description_page6}>Sintesis:</p>
          <p className={styles.description_page6}>
            En conjunto, HTML sirve como el bloque de construcción fundamental
            para crear la estructura y el contenido de las páginas web, y se
            utiliza junto con CSS (Cascading Style Sheets) y JavaScript para
            desarrollar experiencias web interactivas y visualmente atractivas.
          </p>
          <p className={styles.description_page6}>Ahora pongamos en practica lo que vimos recientemente</p>
        </div>
        <Link href="/page7">
          <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Page6;
