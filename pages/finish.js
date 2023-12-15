import Head from "next/head";
import Link from "next/link";
import styles from "dev/styles/Finish.module.css";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  

  useEffect(() => {
    // Activa el efecto de confeti después de un tiempo (por ejemplo, 1 segundo)
    setTimeout(() => {
      setConfetti(true);
    }, 1000);
    // Limpia el temporizador al desmontar el componente
    
  }, []);

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
        <title>Final del tutorial</title>
      </Head>
      <main className={styles.main}>
        {confetti && (
          <Confetti
            recycle={false}
            run={confetti}
            numberOfPieces={400}
            gravity={0.6}
            initialVelocityY={-1}
            initialVelocityX={2}
            opacity={1}
            onConfettiComplete={() => setConfetti(false)}
            wind={0.01}
            windRandom={0.1}
            rotate={false}
          />
        )}
        <h1 className={styles.title}>
          Has llegado al final de esta introducción de HTML
        </h1>
        <h1 className={styles.title2}>
          ¡Te felicito!
        </h1>
        <div className={styles.descriptionContainer}>
          <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              >
            Espero hayas aprendido los conceptos básicos de HTML y puedas
            implementarlos en tus siguientes proyectos
          </motion.p>
        </div>
        <Link href="/">
          <button className={styles.btn_index}>Volver al inicio</button>
        </Link>
      </main>
      </motion.div>
    </AnimatePresence>
  );
}
