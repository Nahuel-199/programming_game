import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "dev/styles/page3_2.module.css";

const page3_2_2 = () => {
  const router = useRouter();

  useEffect(() => {
    // Forzar un scroll al inicio al cambiar de página
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const htmlContent = `
  &lt;!DOCTYPE html&gt;: Define la versión de HTML que estás utilizando (en este caso, HTML5).<br/>
    &lt;html&gt;: Elemento raíz que engloba todo el contenido de la página.<br/>
    &lt;head&gt;: Contiene meta información sobre el documento, como el título, enlaces a hojas de estilo y scripts.<br/>
    &lt;meta charset="UTF-8"&gt;: Especifica el conjunto de caracteres utilizado (UTF-8 para caracteres internacionales).<br/>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;: Ajusta la escala y el ancho en dispositivos móviles.<br/>
    &lt;title&gt;: Define el título de la página que aparecerá en la pestaña del navegador.<br/>
    &lt;body&gt;: Contiene el contenido visible de la página.
    <br/>
  `;

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "1%" }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 1.0 }}
      >
        <Head>
          <title>Estructura Básica</title>
        </Head>
        <div className={styles.container_page3_2}>
          <span className={styles.counter}>3</span>
          <Link href="/page3">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>3</span>
          <div className={styles.descriptionContainer_page3_2}>
            <p className={styles.description_page3_2}>Estructura Básica (Etiquetas):</p>
            <motion.p
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className={styles.description_page3_2}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 1.0, delay: 0.8 }}
            ></motion.p>
          </div>
          <Link href="/page4">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default page3_2_2;
