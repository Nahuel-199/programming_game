import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "dev/styles/page4_3.module.css";

const page4_3 = () => {
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
   HTML permite crear listas ordenadas &lt;ol&gt;, listas no ordenadas &lt;ul&gt;, y elementos de lista &lt;li&gt;.
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
          <title>Tipos de Elementos</title>
        </Head>
        <div className={styles.container_page4_3}>
          <span className={styles.counter}>7</span>
          <Link href="/page4_2">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>7</span>
          <div className={styles.descriptionContainer_page4_3}>
            <p className={styles.description_page4_3}>Listas:</p>
            <motion.p
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className={styles.description_page4_3}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            ></motion.p>
            <motion.p
              className={styles.description_page4_3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/assets/listas.png" className={styles.img_page4_3} />
            </motion.p>
          </div>
          <Link href="/page4_4">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default page4_3;
