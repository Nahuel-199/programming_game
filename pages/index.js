import Head from "next/head";
import Link from "next/link";
import styles from "dev/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Programmin game</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a mi introducción de programación
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Aquí aprenderás los conceptos básicos de HTML, ¿estás listo para
            comenzar este desafío?
          </p>
        </div>
        <Link href="/intro">
            <button className={styles.btn_index}>Comenzar</button>
        </Link>
      </main>
    </>
  );
}
