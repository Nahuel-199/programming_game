import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page3.module.css";

const Page3 = () => {
  const htmlContent = `
    Una página HTML típica consta de una estructura básica que incluye elementos como &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, y &lt;body&gt;. Estos elementos definen la relación entre el documento y el navegador, así como la información básica de la página.
    <br/>
    Ejemplo:
  `;

  return (
    <>
      <Head>
        <title>Estructura Básica</title>
      </Head>
      <div className={styles.container_page3}>
        <span className={styles.counter}>3</span>
        <Link href="/page2">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>3</span>
        <div className={styles.descriptionContainer_page3}>
          <p className={styles.description_page3}>Estructura Básica:</p>
          <p
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className={styles.description_page3}
          ></p>
          <p className={styles.description_page3}>
            <img src="/assets/html.png" className={styles.img_page3} />
          </p>
        </div>
        <Link href="/page4">
          <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Page3;
