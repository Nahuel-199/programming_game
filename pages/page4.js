import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page4.module.css";

const Page4 = () => {
    const htmlContent = `
    HTML incluye una variedad de elementos para representar diferentes tipos de contenido, como encabezados (&lt;h1&gt;, &lt;h2&gt;, ...), párrafos (&lt;p&gt;), listas (&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;), imágenes (&lt;img&gt;), enlaces (&lt;a&gt;), formularios (&lt;form&gt;, &lt;input&gt;, &lt;button&gt;), entre otros.
    <br/>
    Ejemplo:
  `;

  return (
    <>
      <Head>
        <title>Tipos de Elementos</title>
      </Head>
      <div className={styles.container_page4}>
        <span className={styles.counter}>4</span>
        <Link href="/page3">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>4</span>
        <div className={styles.descriptionContainer_page4}>
          <p className={styles.description_page4}>Tipos de Elementos:</p>
          <p
           dangerouslySetInnerHTML={{ __html: htmlContent }}
            className={styles.description_page4}
          ></p>
          <p className={styles.description_page4}>
          <img src="/assets/elementos.png" className={styles.img_page4} />
          </p>
        </div>
        <Link href="/page5">
          <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Page4;
