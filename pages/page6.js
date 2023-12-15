import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "dev/styles/Page6.module.css";

const Page6 = () => {
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
          <title>Deducción</title>
        </Head>
        <div className={styles.container_page6}>
          <span className={styles.counter}>11</span>
          <Link href="/page5_2">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>11</span>
          <div className={styles.descriptionContainer_page6}>
            <p className={styles.description_page6}>Sintesis:</p>
            <motion.p
              className={styles.description_page6}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              En conjunto, HTML sirve como el bloque de construcción fundamental
              para crear la estructura y el contenido de las páginas web, y se
              utiliza junto con CSS (Cascading Style Sheets) y JavaScript para
              desarrollar experiencias web interactivas y visualmente
              atractivas.
            </motion.p>
            <motion.p
              className={styles.description_page6}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Ahora pongamos en practica lo que vimos recientemente
            </motion.p>
          </div>
          <Link href="/answers">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page6;
