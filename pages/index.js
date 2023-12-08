import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "dev/styles/Home.module.css";

export default function Home() {
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 1.0 }}
      >
        <Head>
          <title>Programmin game</title>
        </Head>
        <main className={styles.main}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Bienvenido a mi introducción de programación
          </motion.h1>
          <div className={styles.descriptionContainer}>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              Aquí aprenderás los conceptos básicos de HTML, ¿estás listo para
              comenzar este desafío?
            </motion.p>
          </div>
          <Link href="/intro">
            <button className={styles.btn_index}>Comenzar</button>
          </Link>
        </main>
      </motion.div>
    </>
  );
}
