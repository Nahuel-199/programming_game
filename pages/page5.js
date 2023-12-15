import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "dev/styles/Page5.module.css";

const Page5 = () => {
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
  Las imágenes &lt;img&gt; se utilizan para mostrar gráficos en una página web.
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
          <title>Atributos</title>
        </Head>
        <div className={styles.container_page5}>
          <span className={styles.counter}>9</span>
          <Link href="/page4_4">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>9</span>
          <div className={styles.descriptionContainer_page5}>
            <p className={styles.description_page5}>Imagenes:</p>
            <motion.p
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className={styles.description_page5}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            ></motion.p>
            <motion.p
              className={styles.description_page5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/assets/image.png" className={styles.img_page5} />
            </motion.p>
          </div>
          <Link href="/page5_2">
            <button className={styles.btn_index}>Siguiente</button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page5;
