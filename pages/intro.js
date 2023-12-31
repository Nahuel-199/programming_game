import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "dev/styles/Intro.module.css";

const Intro = () => {
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
              Hablemos un poco de HTML, ¿Qué es HTML?
            </p>
            <motion.p
              className={styles.description_intro}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              HTML (Hypertext Markup Language) es el lenguaje de marcado estándar utilizado para la creación y estructuración de contenido en la web. Permite a los desarrolladores web definir y organizar el contenido de una página, incluyendo texto, imágenes, enlaces, formularios y otros elementos multimedia. HTML es la columna vertebral de la mayoría de las páginas web y es esencial para cualquier desarrollador web.
            </motion.p>
          </div>
          <Link href="/page2">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
