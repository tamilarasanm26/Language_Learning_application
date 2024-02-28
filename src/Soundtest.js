import React, { useState, useEffect } from 'react';
import './Quiz.css'; // Import your custom CSS file
import nlp from 'compromise';

function Soundtest() {
  const questions = [
    {
      id: 1,
      question: "What is the word for 'Apple' in Hindi?",
      type: "voice",
      answer: "सेब",
    },
    {
      id: 2,
      question: "Meaning of लड़का",   
      type: "voice",
      answer: "boy",
    },
    {
      id: 3,
      question: "Select the correct image for the word 'लड़की'.",
      type: "voice",
      answer: "girl.png",
    },
    {
      id: 4,
      question: "What is सेब in english?",
      type: "voice",
      answer: "Apple",
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [tryAgain, setTryAgain] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [spokenText, setSpokenText] = useState('');

  useEffect(() => {
    setUserAnswer(null);
    setIsCorrect(null);
    setTryAgain(false);
    setRetryCount(0);
    setSpokenText('');
  }, [currentQuestionIndex]);

  const handleAnswer = (spokenAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer.toLowerCase();

    if (spokenAnswer.toLowerCase() === correctAnswer) {
      setIsCorrect(true);
      setTryAgain(false);
      setRetryCount(0);
    } else {
      setIsCorrect(false);
      setTryAgain(true);
      setRetryCount(retryCount + 1);
    }
    setUserAnswer(spokenAnswer);
    setSpokenText(spokenAnswer);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleTryAgain = () => {
    setUserAnswer(null);
    setIsCorrect(null);
    setTryAgain(false);
    setRetryCount(0);
    setSpokenText('');
  };

  const handleSpeak = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onstart = () => {
      console.log("Speech recognition started.");
    };

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      handleAnswer(spoken);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
    };

    recognition.start();
  };

  return (
    <div className="container">
      <div className="question">
        <p>{questions[currentQuestionIndex].question}</p>
        <button className="speak-button" onClick={handleSpeak}>Speak</button>
      </div>
      <p>Spoken Text: {spokenText}</p>
      {isCorrect !== null && (
        <div className="result">
          <p>{isCorrect === true ? "Correct!" : isCorrect === false ? "Incorrect" : ""}</p>
        </div>
      )}
      {(isCorrect === false && tryAgain) && (
        <div className="try-again-container">
          <p className="try-again-text">Choose the correct answer</p>
          <button className="try-again-button" onClick={handleTryAgain}>Try Again</button>
        </div>
      )}
      {isCorrect === true && currentQuestionIndex < questions.length - 1 && (
        <button className="next-button" onClick={handleNextQuestion}>Next</button>
      )}
    </div>
  );
}

export default Soundtest;
