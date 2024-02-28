// import React from 'react';
// import { speak, speakSentence } from './speak'; // adjust the path as necessary

// const Step = ({ stepNumber, title, description, items }) => {
//   return (
//     <div className="unit1">
//       <div className="headsection">
//         <center>
//           <h1>Step {stepNumber}</h1>
//           <p>{description}</p>
//         </center>
//       </div>
//       <div className="bodysection">
//         <div className="letters-container">
//           {items.map((item, index) => (
//             <div key={index} className="letter" onClick={() => speak(item.text)}>
//               {item.text}
//               <br />
//               {item.translation}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const SentenceStep = ({ stepNumber, title, description, sentences }) => {
//   return (
//     <div className="unit1">
//       <div className="headsection">
//         <center>
//           <h1>Step {stepNumber}</h1>
//           <p>{description}</p>
//         </center>
//       </div>
//       <div className="bodysection">
//         <div className="letters-container">
//           {sentences.map((sentence, index) => (
//             <div key={index} className="sentence sen" onClick={() => speakSentence(sentence.text)}>
//               {sentence.text}
//               <br />
//               {sentence.translation}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Unit1 = () => {
//   const steps = [
//     {
//       stepNumber: 1,
//       title: "Learn Hindi Letters Basic",
//       description: "Learn Hindi Letters Basic",
//       items: [
//         { text: "अ", translation: "a" },
//         { text: "आ", translation: "aa" },
//         { text: "इ", translation: "i" },
//         { text: "ई", translation: "ee" },
//         { text: "उ", translation: "u" },
//         { text: "ऊ", translation: "uu" },
//         { text: "ए", translation: "e" },
//         { text: "ऐ", translation: "ai" },
//         { text: "ओ", translation: "o" },
//         { text: "औ", translation: "au" },
//       ]
//     },
//     {
//       stepNumber: 2,
//       title: "Learn Hindi Letters",
//       description: "Learn Hindi Letters",
//       items: [
//         { text: "क", translation: "ka" },
//         { text: "ख", translation: "kha" },
//         { text: "ग", translation: "ga" },
//         { text: "घ", translation: "gha" },
//         { text: "ङ", translation: "na" },
//         { text: "च", translation: "ca" },
//         { text: "छ", translation: "cha" },
//         { text: "ज", translation: "ja" },
//         { text: "झ", translation: "jha" },
//         { text: "ञ", translation: "nha" },
//         // Add more letters
//       ]
//     },
//     {
//       stepNumber: 3,
//       title: "Syllable Words with 3 Syllables",
//       description: "Syllable Words with 3 Syllables",
//       items: [
//         { text: "सुन", translation: "sun (Listen)" },
//         { text: "चाँदनी", translation: "chaandanee (moonlight)" },
//         { text: "किताब", translation: "kitaab (Book)" },
//         { text: "मानव", translation: "maanav (human)" },
//         // Add more words
//       ]
//     },
//     {
//       stepNumber: 4,
//       title: "Syllable Words with 4 Syllables",
//       description: "Syllable Words with 4 Syllables",
//       items: [
//         { text: "विज्ञानशास्त्र", translation: "vigyaanashaastr (anthropology)" },
//         { text: "संगठन", translation: "sangathan (Organization)" },
//         { text: "उपयोगकर्ता", translation: "upayogakarta (the user)" },
//         { text: "परिपूर्णता", translation: "paripoornata (completeness)" },
//         // Add more words
//       ]
//     },
//     {
//       stepNumber: 5,
//       title: "Syllable Words with 5 Syllables",
//       description: "Syllable Words with 5 Syllables",
//       items: [
//         { text: "प्राणिकतावादिता", translation: "praanikataavaadita (vitalism)" },
//         { text: "विज्ञानशास्त्रशिक्षक", translation: "vigyaanashaastrashikshak (science teacher)" },
//         { text: "परिपूर्णतानुसार", translation: "paripoornataanusaar (according to perfection)" },
//         { text: "संगठनसदस्य", translation: "sangathan sadasy (organization member)" },
//         // Add more words
//       ]
//     },
//     {
//       stepNumber: 6,
//       title: "Syllable Words with 5 Syllables",
//       description: "Syllable Words with 5 Syllables",
//       sentences: [
//         { text: "सुन किताब में है।", translation: "sun kitaab mein hai (Listen, it's in the book)" },
//         { text: "आदमी काम कर रहा है।", translation: "aadamee kaam kar raha hai (The man is working)" },
//         { text: "महिला फूल लेती है।", translation: "mahila phool letee hai (The woman takes the flowers.)" },
//         { text: "बच्चे खुश हैं।", translation: "bachche khush hain (The children are happy)" },
//         { text: "समय अच्छा है।", translation: "samay achchha hai (Time is good)" },
//         // Add more sentences
//       ]
//     },
//   ];

// //   // Function to speak the clicked letter or word
// //   const speak = (text) => {
// //     const utterance = new SpeechSynthesisUtterance(text);
// //     utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
// //     window.speechSynthesis.speak(utterance);
// //   }

// //   // Function to speak sentences
// //   const speakSentence = (sentence) => {
// //     const utterance = new SpeechSynthesisUtterance(sentence);
// //     utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
// //     window.speechSynthesis.speak(utterance);
// //   }

//   return (
//     <div>
//       {steps.map((step, index) => (
//         step.sentences ?
//           <SentenceStep key={index} {...step} /> :
//           <Step key={index} {...step} />
//       ))}
//     </div>
//   );
// };

// export default Unit1;

import React from 'react';
import './Unit1ch.css'
import { Link } from 'react-router-dom';
class Unit1ch extends React.Component {
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
        <h1>Learn Hindi Letters and Words</h1>
        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 1</h1>
              <p>Learn Hindi Letters Basic</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
              <div className="letter" onClick={() => this.speak('अ')}>अ<br />a</div>
              <div className="letter" onClick={() => this.speak('आ')}>आ<br />aa</div>
              <div class="letter" onClick={() => this.speak('ई')}>ई<br/>ee</div>
                 <div class="letter" onClick={() => this.speak('उ')}>उ<br/>u</div>
                 <div class="letter" onClick={() => this.speak('ऊ')}>ऊ<br/>uu</div>
                  <div class="letter" onClick={() => this.speak('ऋ')}>ऋ<br/>r</div>
                 <div class="letter" onClick={()=> this.speak('ए')}>ए<br/>e</div>
                 <div class="letter" onClick={()=> this.speak('ऐ')}>ऐ<br/>ai</div>
                 <div class="letter" onClick={()=> this.speak('ओ')}>ओ<br/>o</div>
                 <div class="letter" onClick={()=> this.speak('औ')}>औ<br/>au</div>

            </div>

            <Link to="/Lettertest">
          <button className='prac'>
            Practice
          </button>
          </Link>
          </div>
        </div>
        {/* Add other steps similarly */}
        {/* For Step 2 */}
        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 2</h1>
              <p>Learn Hindi Letters</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
              <div className="letter" onClick={() => this.speak('क')}>क<br />ka</div>
              <div className="letter" onClick={() => this.speak('ख')}>ख<br />kha</div>
              <div class="letter" onClick={() => this.speak('ग')}>ग<br/>ga</div>
                <div class="letter" onClick={() => this.speak('घ')}>घ<br/>gha</div>
                <div class="letter" onClick={() => this.speak('ङ')}>ङ<br/>na</div>
                <div class="letter" onClick={() => this.speak('च')}>च<br/>ca</div>
                <div class="letter" onClick={() => this.speak('छ')}>छ<br/>cha</div>
                <div class="letter" onClick={() => this.speak('ज')}>ज<br/>ja</div>
                <div class="letter" onClick={() => this.speak('झ')}>झ<br/>jha</div>
                <div class="letter" onClick={() => this.speak('ञ')}>ञ<br/>nha</div>
                <div class="letter" onClick={() => this.speak('ट')}>ट<br/>ta</div>
                <div class="letter" onClick={() => this.speak('ठ')}>ठ<br/>tha</div>
                <div class="letter" onClick={() => this.speak('ड')}>ड<br/>da</div>
            
            </div>
            <div className="letters-container">
            <div class="letter" onClick={() => this.speak('ढ')}>ढ<br/>dha</div>
                <div class="letter" onClick={() => this.speak('ण')}>ण<br/>nna</div>
                <div class="letter" onClick={() => this.speak('त')}>त<br/>Th</div>
                <div class="letter" onClick={() => this.speak('थ')}>थ<br/>Tha</div>
                <div class="letter" onClick={() => this.speak('द')}>द<br/>da</div>
                <div class="letter" onClick={() => this.speak('ध')}>ध<br/>dha</div>
                <div class="letter" onClick={() => this.speak('न')}>न<br/>na</div>
                <div class="letter" onClick={() => this.speak('प')}>प<br/>pa</div>
                <div class="letter" onClick={() => this.speak('फ')}>फ<br/>pha</div>
                <div class="letter" onClick={() => this.speak('ब')}>ब<br/>ba</div>
                <div class="letter" onClick={() => this.speak('भ')}>भ<br/>bha</div>
                <div class="letter" onClick={() => this.speak('म')}>म<br/>ma</div>
                <div class="letter" onClick={() => this.speak('य')}>य<br/>ya</div>
            </div>
            <div className="letters-container">
            <div class="letter" onClick={() => this.speak('र')}>र<br/>ra</div>
                <div class="letter" onClick={() => this.speak('ल')}>ल<br/>la</div>
                <div class="letter" onClick={() => this.speak('व')}>व<br/>va</div>
                <div class="letter" onClick={() => this.speak('श')}>श<br/>sh</div>
                <div class="letter" onClick={() => this.speak('ष')}>ष<br/>sha</div>
                <div class="letter" onClick={() => this.speak('स')}>स<br/>sa</div>
                <div class="letter" onClick={() => this.speak('ह')}>ह<br/>ha</div>
                <div class="letter" onClick={() => this.speak('क़')}>क़<br/>qa</div>
                <div class="letter" onClick={() => this.speak('ख़')}>ख़<br/>kh</div>
                <div class="letter" onClick={() => this.speak('ग़')}>ग़<br/>ga</div>
                <div class="letter" onClick={() => this.speak('ज़')}>ज़<br/>kh</div>
                <div class="letter" onClick={() => this.speak('ड़')}>ड़<br/>ga</div>
                <div class="letter" onClick={() => this.speak('ढ़')}>ढ़<br/>za</div>
                <div class="letter" onClick={() => this.speak('फ़')}>फ़<br/>phha</div>
                <div class="letter" onClick={() => this.speak('श़')}>श़<br/>sh</div>
            </div>
          </div>
        </div>
        {/* Add other steps similarly */}
        {/* For Step 3 */}
        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 3</h1>
              <p>Syllable Words with 3 Syllables</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
              <div className="letter" onClick={() => this.speak('सुन')}>सुन<br />sun(Listen)</div>
              <div className="letter" onClick={() => this.speak('चाँदनी')}>चाँदनी<br />chaandanee(moonlight)</div>
              <div className="letter" onClick={() => this.speak('किताब')}>किताब<br />kitaab(Book)</div>
              <div className="letter" onClick={() => this.speak('मानव')}>मानव<br />maanav(human)</div>
              {/* Add more words */}
            </div>
          </div>
        </div>

        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 4</h1>
              <p>Syllable Words with 4 Syllables</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
            <div class="letter" onClick={() => this.speak('विज्ञानशास्त्र')}>विज्ञानशास्त्र<br/>vigyaanashaastr(anthropology)</div>
                <div class="letter" onClick={() => this.speak('संगठन')}>संगठन<br/>sangathan(Organization)</div>
                <div class="letter" onClick={() => this.speak('उपयोगकर्ता')}>उपयोगकर्ता<br/>upayogakarta(the user)</div>
                <div class="letter" onClick={() => this.speak('परिपूर्णता')}>परिपूर्णता<br/>paripoornata(completeness)</div>
               {/* Add more words */}
            </div>
          </div>
        </div>



        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 5</h1>
              <p>Syllable Words with 5 Syllables</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
            <div class="letter" onClick={() => this.speak('प्राणिकतावादिता')}>प्राणिकतावादिता<br/>praanikataavaadita(vitalism)</div>
                <div class="letter" onClick={() => this.speak('विज्ञानशास्त्रशिक्षक')}>विज्ञानशास्त्रशिक्षक<br/>vigyaanashaastrashikshak(science teacher)</div>
                <div class="letter" onClick={() => this.speak('परिपूर्णतानुसार')}>परिपूर्णतानुसार<br/>paripoornataanusaar(according to perfection)</div>
                <div class="letter" onClick={() => this.speak('संगठनसदस्य')}>संगठनसदस्य<br/>sangathan sadasy(organization member)</div>
                <div class="letter" onClick={() => this.speak('उपयोगकर्तानिष्कर्ष')}>उपयोगकर्तानिष्कर्ष<br/>upayogakartaanishkarsh(User Conclusion)</div>
                {/* Add more words */}
            </div>
          </div>
        </div>

        <div className="unit1">
          <div className="headsection">
            <center>
              <h1>Step 6</h1>
              <p>Syllable Words with 6 Syllables</p>
            </center>
          </div>
          <div className="bodysection">
            <div className="letters-container">
            <div class="sentence sen" onClick={() => this.speakSentence('सुन किताब में है।')}>सुन किताब में है।<br/>sun kitaab mein hai(Listen, it's in the book)</div>
                <div class="sentence sen" onClick={() => this.speakSentence('आदमी काम कर रहा है।')}>आदमी काम कर रहा है।<br/>aadamee kaam kar raha hai(The man is working)</div>
                <div class="sentence sen" onClick={() => this.speakSentence('महिला फूल लेती है।')}>महिला फूल लेती है।<br/>mahila phool letee hai(The woman takes the flowers.)</div>
                <div class="sentence sen" onClick={() => this.speakSentence('बच्चे खुश हैं।')}>बच्चे खुश हैं।<br/>bachche khush hain(The children are happy)</div>
                <div class="sentence sen" onClick={() => this.speakSentence('समय अच्छा है।')}>समय अच्छा है।<br/>samay achchha hai(Time is good)</div>
               {/* Add more words */}
            </div>
          </div>
        </div>
        

        {/* Add other steps similarly */}
        {/* For Step 4, Step 5, and Step 6 */}
      </div>
    );
  }
}

export default Unit1ch;

