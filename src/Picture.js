
import React from 'react';
import './Unit1ch.css'
import { Link } from 'react-router-dom';
import Dog from './images/dog.jpg';
class Picture extends React.Component {
  // Function to speak the clicked letter or word
  speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    window.speechSynthesis.speak(utterance);
  };

  // Function to speak sentences
  speakSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    window.speechSynthesis.speak(utterance);
  };

  render() {
    return (
      <div>
        <h1>Learn Hindi With Pictures</h1>
        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 1</h1>
              
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
            <div className="letter" onClick={() => this.speak('बिल्ली')}> <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-53920-800.jpg"id="image1" className="card-img-top" alt="..." /><br/>बिल्ली<br/>Cat</div>
              <div className="letter" onClick={() => this.speak('कुत्ता')}> <img src={Dog} id="image1" className="card-img-top" alt="..." /><br/>कुत्ता<br />Dog</div>
              <div className="letter" onClick={() => this.speak('गाय')}> <img src="https://th.bing.com/th/id/OIP.f8YAJjnPtcZpvz_62DuAvQHaE8?rs=1&pid=ImgDetMain" id="image1" className="card-img-top" alt="..." /><br/>गाय<br />Cow</div>
              <div className="letter" onClick={() => this.speak('बकरी')}> <img src="https://thumbs.dreamstime.com/b/white-goat-standing-green-grass-98890666.jpg" id="image1" className="card-img-top" alt="..." /><br/>बकरी<br />Goat</div>
              <div className="letter" onClick={() => this.speak('ब')}> <img src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=" id="image1" className="card-img-top" alt="..." /><br/>ब<br />Hen</div>
            </div>
          </div>
          <Link to="/Speaktest">
          <button className='prac'>
            Practice
          </button>
          </Link>
        </div>

      </div>
    );
  }
}

export default Picture;

