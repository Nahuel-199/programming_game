import Head from "next/head";
import Link from "next/link";
import styles from "dev/styles/Finish.module.css";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Home() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    // Activa el efecto de confeti después de un tiempo (por ejemplo, 1 segundo)
   
      setConfetti(true);

    // Limpia el temporizador al desmontar el componente
    
  }, []);

  return (
    <>
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
        <h1 className={styles.title}>
          ¡Te felicito!
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Espero hayas aprendido los conceptos básicos de HTML y puedas
            implementarlos en tus siguientes proyectos
          </p>
        </div>
        <Link href="/">
          <button className={styles.btn_index}>Volver al inicio</button>
        </Link>
      </main>
    </>
  );
}
