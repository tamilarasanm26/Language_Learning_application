import React, { useState } from 'react';
import './Speaktest.css';
const Lettertest = () => {
  const questions = [
    { image: 'data:image/png;base64,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', correctPronunciation: 'अ' },
    { image: 'data:image/jpeg;base64,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', correctPronunciation: 'आ' }
    ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [text, setText] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [listening, setListening] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);

  const recognition = new window.webkitSpeechRecognition();
  const speechSynthesis = window.speechSynthesis;

  recognition.lang = 'hi-IN';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');

    setText(transcript);
    setListening(false);
    checkPronunciation(transcript);
  };

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setListening(false);
  };

  const checkPronunciation = (inputText) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctPronunciation = currentQuestion.correctPronunciation;
    setPronunciation(correctPronunciation);
    const correct = inputText.trim().toLowerCase() === correctPronunciation;
    setIsCorrect(correct);

    // Change background color based on correctness
    document.body.style.backgroundColor = correct ? 'lightgreen' : 'salmon';

    // Speak correct or wrong pronunciation
    const feedback = correct ? 'Correct' : 'Wrong';
    const utterance = new SpeechSynthesisUtterance(feedback);
    speechSynthesis.speak(utterance);

    if (correct) {
      setShowNextButton(true);
      setShowTryAgainButton(false);
    } else {
      setShowNextButton(false);
      setShowTryAgainButton(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setText('');
      setPronunciation('');
      setIsCorrect(false);
      setShowNextButton(false);
      setShowTryAgainButton(false);
    } else {
      alert('All questions answered!');
    }
  };

  const tryAgain = () => {
    setText('');
    setShowNextButton(false);
    setShowTryAgainButton(false);
    startListening();
  };

  return (
    <div className="container-1">
      <h1>Speech Recognition App</h1>
      <div className="button-container-1">
        <button className='button-1' onClick={startListening} disabled={listening}>
          Start Listening
        </button>
        <button className='button-1' onClick={stopListening} disabled={!listening}>
          Stop Listening
        </button>
      </div>
      <img 
        src={questions[currentQuestionIndex].image} 
        alt="Question" 
        className="question-image"
      />
      <p className="text">Spoken Text: {text}</p>
      <p className="pronunciation">Correct Pronunciation: {pronunciation}</p>
      <p className="correctness">Pronunciation is: {isCorrect ? 'Correct' : 'Wrong'}</p>
      {showNextButton && (
        <button className="next-btn" onClick={nextQuestion}>Next Question</button>
      )}
      {showTryAgainButton && (
        <button className="try-again-btn" onClick={tryAgain}>Try Again</button>
      )}
    </div>
  );
};

export default Lettertest;
