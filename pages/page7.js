import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "dev/styles/Page7.module.css";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page7 = () => {
    const questions = [
        {
          id: 1,
          question: '¿Cuál es la etiqueta principal en HTML?',
          options: ['<head>', '<html>', '<body>', '<title>'],
          correctAnswer: '<html>',
        },
        // Agrega más preguntas según sea necesario
    ];
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [disableSelection, setDisableSelection] = useState(false);
    const showButtonRef = useRef(false);

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
              toast.success('¡Respuesta correcta!');
            } else {
              toast.error('Respuesta incorrecta. ¡Inténtalo de nuevo!');
              setDisableSelection(true);
              document.querySelectorAll(`.${styles.option}`).forEach((option) => {
                if (option.textContent === answer) {
                  option.classList.add(styles.incorrect);
                }
              });
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
          toast.info('Has completado todas las preguntas. ¡Reiniciando el juego!');
          resetStyles();
          setSelectedAnswer(null);
          setDisableSelection(false);
          showButtonRef.current = false;
          forceUpdate(); // Forzar la actualización del componente
          setCurrentQuestionIndex(0);
        }
      };
    
      const handleRestartClick = () => {
        // Reinicia el juego
        resetStyles();
        setSelectedAnswer(null);
        setDisableSelection(false);
        showButtonRef.current = false;
        forceUpdate(); // Forzar la actualización del componente
        setCurrentQuestionIndex(0);
      };
    
      const resetStyles = () => {
        document.querySelectorAll(`.${styles.option}`).forEach((option) => {
          option.classList.remove(styles.incorrect, styles.selected);
        });
      };

      const [, updateState] = useState();
      const forceUpdate = () => updateState({});
    
  return (
    <>
    <Head>
        <title>Preguntas y Respuestas</title>
    </Head>
    <div className={styles.container_page7}>
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
                                selectedAnswer === option ? styles.selected : ''
                            }`}
                            onClick={() => handleAnswerClick(option)}
                        >
                            {option}
                        </div>
                    ))}
            </div>
            {selectedAnswer && showButtonRef.current && (
                <div>
                    {selectedAnswer === questions[currentQuestionIndex].correctAnswer ? (
                        <button className={styles.btn_index} onClick={handleNextClick}>
                            Siguiente
                        </button>
                    ) : (
                        <button className={styles.btn_index} onClick={handleRestartClick} > 
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

export default Page7;
