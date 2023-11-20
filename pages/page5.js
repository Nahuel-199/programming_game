import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page5.module.css";

const Page5 = () => {
  const htmlContent = `
    Los atributos proporcionan información adicional sobre un elemento y se especifican dentro de las etiquetas. Por ejemplo, el atributo src en la etiqueta <img> especifica la fuente (URL) de la imagen.
   <br/>
Ejemplo:
  `;

  return (
    <>
      <Head>
        <title>Atributos</title>
      </Head>
      <div className={styles.container_page5}>
        <span className={styles.counter}>5</span>
        <Link href="/page4">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>5</span>
        <div className={styles.descriptionContainer_page5}>
          <p className={styles.description_page5}>Atributos:</p>
          <p
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className={styles.description_page5}
          ></p>
          <p className={styles.description_page5}>
            <img src="/assets/image.png" className={styles.img_page5} />
          </p>
        </div>
        <Link href="/page6">
          <button className={styles.btn_index}>Siguiente</button>
        </Link>
      </div>
    </>
  );
};

export default Page5;
