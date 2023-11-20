import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page2.module.css";

const Page2 = () => {
  return (
    <>
      <Head>
        <title>Etiquetas</title>
      </Head>
      <div className={styles.container_page2}>
        <span className={styles.counter}>2</span>
        <Link href="/intro">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>2</span>
        <div className={styles.descriptionContainer_page2}>
          <p className={styles.description_page2}>Marcado de Elementos:</p>
          <p className={styles.description_page2}>
            HTML utiliza una serie de elementos, etiquetas y atributos para
            estructurar el contenido de una página web. Los elementos están
            rodeados por etiquetas, y cada etiqueta puede tener atributos que
            proporcionan información adicional sobre el elemento. Ejemplo:
          </p>
          <p className={styles.description_page2}>
            <img src="/assets/p.png" className={styles.img_page2}/>
          </p>
        </div>
        <Link href="/page3">
          <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Page2;
