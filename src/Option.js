import React from 'react';
import './Learning.css';
import './dis.css';
import { Link } from 'react-router-dom';
// Import your CSS file
// Your component code here
const Option = () => {
  return (
    <div>
      <div className="close-button">
        <a href="learning_language.html" id="login-back">&#8249;</a>
      </div>
      <div className="language-selection">
        <center>
          <h2 id='header'>Learning Options</h2><br/>
        </center>
      </div>
      <div className="cards-container">
        <Link to="/unit1ch" className="card-link">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA09EcVAeFO81AfzMVGrjD0xLT8qZesAiElQ&usqp=CAU"className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Audio Based Learning</h5>
              </div>
            </center>
          </div>
        </Link>
        <Link to="/Picture"  className="card-link">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="data:image/jpeg;base64,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"id="image1" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Picture Based Learning</h5>
              </div>
            </center>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Option;

