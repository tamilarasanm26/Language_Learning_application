import React from 'react';
import './Learning.css';
import './dis.css';
import { Link } from 'react-router-dom';
// Import your CSS file

const Disability = () => {
  return (
    <div>
      <div className="close-button">
        <a href="learning_language.html" id="login-back">&#8249;</a>
      </div>
      <div className="language-selection">
        <center>
          <h2 id='header'>Choose Disability</h2><br/>
        </center>
      </div>
      <div className="cards-container">
        <Link to="/Home1" className="card-link">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="data:image/jpeg;base64,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"className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Beginners</h5>
                <p className="card-text">Start from scratch!</p>
              </div>
            </center>
          </div>
        </Link>
        <a href="link_to_english_page.html" className="card-link">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="data:image/jpeg;base64,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"id="image1" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Intermediate</h5>
                <p className="card-text">Learn More</p>
              </div>
            </center>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Disability;

