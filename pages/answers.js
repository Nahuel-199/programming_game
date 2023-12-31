import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Ansers.module.css";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Answers = () => {
  const questions = [
    {
      id: 1,
      question: "¿Cuál es la etiqueta principal en HTML?",
      options: ["<head>", "<html>", "<body>", "<title>"],
      correctAnswer: "<html>",
    },
    {
      id: 2,
      question: "¿Qué significa HTML en inglés?",
      options: [
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
        "High-Level Text Management Language",
        "Home Tool for Multimedia Language",
      ],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      id: 3,
      question:
        "¿Cuál es el propósito del atributo src= en la etiqueta <img> de HTML?",
      options: [
        "Especificar el estilo de la imagen.",
        "Definir la estructura básica de la página.",
        "Proporcionar información adicional sobre la imagen.",
        "Indicar la fuente (URL) de la imagen.",
      ],
      correctAnswer: "Indicar la fuente (URL) de la imagen.",
    },
    {
      id: 4,
      question: "¿Cómo se estructura una lista no ordenada en HTML?",
      options: ["<ul>, <li>", "<ol>, <li>", "<ul>, <ol>", "<li>, <p>"],
      correctAnswer: "<ul>, <li>",
    },
    {
      id: 5,
      question: "¿Qué elemento HTML se utiliza para crear un formulario?",
      options: ["<input>", "<button>", "<form>", "<label>"],
      correctAnswer: "<form>",
    },
    {
      id: 6,
      question: "¿Cuál es el propósito de la etiqueta <p> en HTML?",
      options: [
        "Mostrar una imagen",
        "Crear un enlace",
        "Definir un párrafo de texto",
        "Enumerar una lista",
      ],
      correctAnswer: "Definir un párrafo de texto",
    },
    // Agrega más preguntas según sea necesario
  ];

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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [disableSelection, setDisableSelection] = useState(false);
  const showButtonRef = useRef(false);
  const incorrectQuestionIndexRef = useRef(null);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    // Si el usuario selecciona una respuesta, muestra el botón después de un tiempo
    if (selectedAnswer !== null) {
      setTimeout(() => {
        showButtonRef.current = true;
        forceUpdate(); // Forzar la actualización del componente
      }, 1500);
    }
  }, [selectedAnswer]);

  const handleAnswerClick = (answer) => {
    if (!disableSelection) {
      setSelectedAnswer(answer);

      // Simula un titileo de la opción seleccionada por un corto tiempo
      setTimeout(() => {
        // Verifica la respuesta seleccionada
        if (
          questions[currentQuestionIndex] &&
          answer === questions[currentQuestionIndex].correctAnswer
        ) {
          toast.success("¡Respuesta correcta!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Respuesta incorrecta. ¡Inténtalo de nuevo!", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDisableSelection(true);
          document.querySelectorAll(`.${styles.option}`).forEach((option) => {
            if (option.textContent === answer) {
              option.classList.add(styles.incorrect);
            }
          });

          // Almacena el índice de la pregunta incorrecta
          incorrectQuestionIndexRef.current = currentQuestionIndex;
        }
      }, 1500); // 1500 milisegundos de titileo
    }
  };

  const handleNextClick = () => {
    // Avanza a la siguiente pregunta o reinicia el juego
    if (currentQuestionIndex < questions.length - 1) {
      resetStyles();
      setSelectedAnswer(null);
      setDisableSelection(false);
      showButtonRef.current = false;
      forceUpdate(); // Forzar la actualización del componente
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (incorrectQuestionIndexRef.current !== null) {
        toast.info(
          "Respuesta incorrecta. ¡Reiniciando desde la pregunta incorrecta!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        setCurrentQuestionIndex(incorrectQuestionIndexRef.current);
      } else {
        toast.success("Has completado todas las preguntas. ¡Te felicito!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          Router.push("/finish"); // Ajusta la ruta según tu estructura de archivos
        }, 3000); // Ajusta el tiempo en milisegundos según tus necesidades
      }

      resetGame();
    }
  };

  const handleRestartClick = () => {
    // Reinicia el juego
    if (incorrectQuestionIndexRef.current !== null) {
      setCurrentQuestionIndex(incorrectQuestionIndexRef.current);
      incorrectQuestionIndexRef.current = null; // Resetea el índice de la pregunta incorrecta
    } else {
      toast.info("Has completado todas las preguntas. ¡Reiniciando el juego!", {
        position: toast.POSITION.TOP_CENTER,
      });

      setCurrentQuestionIndex(0);
    }

    resetGame();
  };

  const resetGame = () => {
    resetStyles();
    setSelectedAnswer(null);
    setDisableSelection(false);
    showButtonRef.current = false;
    forceUpdate(); // Forzar la actualización del componente
    incorrectQuestionIndexRef.current = null; // Reinicia el índice de pregunta incorrecta
  };

  const resetStyles = () => {
    document.querySelectorAll(`.${styles.option}`).forEach((option) => {
      option.classList.remove(styles.incorrect, styles.selected);
    });
  };

  const [, updateState] = useState();
  const forceUpdate = () => updateState({});

  useEffect(() => {
    if (selectedAnswer === questions[currentQuestionIndex]?.correctAnswer) {
      // Espera un momento antes de activar el efecto de confeti
      setTimeout(() => {
        setConfetti(true);

        // Espera otro momento antes de desactivar el efecto de confeti
        setTimeout(() => {
          setConfetti(false);
        }, 3500); // Cambia el valor según tus preferencias
      }, 1500); // Cambia el valor según tus preferencias
    }
  }, [selectedAnswer, currentQuestionIndex]);

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 1.0 }}
      >
        <Head>
          <title>Preguntas y Respuestas</title>
        </Head>
        <div className={styles.container_page7}>
          {confetti && (
            <Confetti
              recycle={false}
              run={confetti}
              numberOfPieces={400}
              gravity={0.6}
              initialVelocityY={-5}
              initialVelocityX={2}
              opacity={1}
              onConfettiComplete={() => setConfetti(false)}
              recycleDelay={3000}
              wind={0}
              windRandom={0}
              rotate={false}
            />
          )}
          <span className={styles.counter}>12</span>
          <Link href="/page6">
            <AiOutlineArrowLeft className={styles.backArrow} />
          </Link>
          <span className={styles.counter}>12</span>
          <div className={styles.descriptionContainer_page7}>
            <motion.p
              className={styles.description_page7}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Pregunta {currentQuestionIndex + 1}:
            </motion.p>
            {questions[currentQuestionIndex] && (
              <motion.p
                className={styles.description_page7}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {questions[currentQuestionIndex].question}
              </motion.p>
            )}
            <div className={styles.optionsContainer}>
              {questions[currentQuestionIndex] &&
                questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`${styles.option} ${
                      selectedAnswer === option ? styles.selected : ""
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: "0" }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 1.0, delay: 1.0 }}
                  >
                    {option}
                  </motion.div>
                ))}
            </div>
            {selectedAnswer && showButtonRef.current && (
              <div>
                {selectedAnswer ===
                questions[currentQuestionIndex].correctAnswer ? (
                  <button
                    className={styles.btn_index}
                    onClick={handleNextClick}
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    className={styles.btn_index}
                    onClick={handleRestartClick}
                  >
                    Volver a responder
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Answers;
