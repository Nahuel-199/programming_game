import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page7.module.css";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

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
      question: "¿Qué significa HTML y cuál es su significado en inglés?",
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
      correctAnswer:
        "Indicar la fuente (URL) de la imagen.",
    },
    {
        id: 4,
        question:
          "¿Cómo se estructura una lista no ordenada en HTML?",
        options: [
          "<ul>, <li>",
          "<ol>, <li>",
          "<ul>, <ol>",
          "<li>, <p>",
        ],
        correctAnswer:
          "<ul>, <li>",
      },
      {
        id: 5,
        question:
          "¿Qué elemento HTML se utiliza para crear un formulario?",
        options: [
          "<input>",
          "<button>",
          "<form>",
          "<label>",
        ],
        correctAnswer:
          "<form>",
      },
      {
        id: 6,
        question:
          "¿Cuál es el propósito de la etiqueta <p> en HTML?",
        options: [
          "Mostrar una imagen",
          "Crear un enlace",
          "Definir un párrafo de texto",
          "Enumerar una lista",
        ],
        correctAnswer:
          "Definir un párrafo de texto",
      },
    // Agrega más preguntas según sea necesario
  ];

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
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error("Respuesta incorrecta. ¡Inténtalo de nuevo!", {
            position: toast.POSITION.BOTTOM_CENTER
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
          "Respuesta incorrecta. ¡Reiniciando desde la pregunta incorrecta!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        setCurrentQuestionIndex(incorrectQuestionIndexRef.current);
      } else {
        toast.info(
          "Has completado todas las preguntas. ¡Reiniciando el juego!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        setCurrentQuestionIndex(0);
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
        position: toast.POSITION.BOTTOM_CENTER
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
      }, 1000); // Cambia el valor según tus preferencias
    }
  }, [selectedAnswer, currentQuestionIndex]);


  return (
    <>
      <Head>
        <title>Preguntas y Respuestas</title>
      </Head>
      <div className={styles.container_page7}>
         {confetti && <Confetti style={{
            animation: 'confetti-fall 3s linear infinite',
    }}/>}
        <span className={styles.counter}>7</span>
        <Link href="/page6">
          <AiOutlineArrowLeft className={styles.backArrow} />
        </Link>
        <span className={styles.counter}>7</span>
        <div className={styles.descriptionContainer_page7}>
          <p className={styles.description_page7}>
            Pregunta {currentQuestionIndex + 1}:
          </p>
          {questions[currentQuestionIndex] && (
            <p className={styles.description_page7}>
              {questions[currentQuestionIndex].question}
            </p>
          )}
          <div className={styles.optionsContainer}>
            {questions[currentQuestionIndex] &&
              questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  className={`${styles.option} ${
                    selectedAnswer === option ? styles.selected : ""
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </div>
              ))}
          </div>
          {selectedAnswer && showButtonRef.current && (
            <div>
              {selectedAnswer ===
              questions[currentQuestionIndex].correctAnswer ? (
                <button className={styles.btn_index} onClick={handleNextClick}>
                  Siguiente
                </button>
              ) : (
                <button
                  className={styles.btn_index}
                  onClick={handleRestartClick}
                >
                  Reiniciar Juego
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Answers;
