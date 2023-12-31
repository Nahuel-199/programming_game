import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "dev/styles/Page3.module.css";

const Page3 = () => {
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
  Toda página HTML sigue una estructura básica:
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
            <motion.p
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className={styles.description_page3}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 1.0, delay: 0.8 }}
            ></motion.p>
            <motion.p
              className={styles.description_page3}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 1.0, delay: 0.8 }}
            >
              <img src="/assets/html.png" className={styles.img_page3} />
            </motion.p>
            <motion.p
              className={styles.description_page3}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 1.0, delay: 0.8 }}
            >
              A continuación explicaremos las etiquetas que vemos en este ejemplo
            </motion.p>
          </div>
          <Link href="/page3_2">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page3;
