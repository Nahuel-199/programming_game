import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page2.module.css";

const Page2 = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const htmlContent = `
    Una página HTML típica consta de una estructura básica que incluye elementos como &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, y &lt;body&gt;, pero la etiqueta principal para comenzar un archivo html es la etiqueta del propio nombre &lt;html&gt;. Estos elementos definen la relación entre el documento y el navegador, así como la información básica de la página.
    <br/>
    Ejemplo:
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
          <title>Etiquetas y Elementos</title>
        </Head>
        <div className={styles.container_page2}>
          <span className={styles.counter}>2</span>
          <Link href="/intro">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>2</span>
          <div className={styles.descriptionContainer_page2}>
            <p className={styles.description_page2}>Etiquetas y Elementos:</p>
            <motion.p
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className={styles.description_page2}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
            </motion.p>
            <motion.p
              className={styles.description_page2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/assets/p.png" className={styles.img_page2} />
            </motion.p>
          </div>
          <Link href="/page3">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page2;
