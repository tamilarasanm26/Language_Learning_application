import React from 'react';
import './Home.css'; // Import necessary CSS files
import './Learning.css';
import { Link } from 'react-router-dom';
const Learning = () => {
  return (
    <div>
      <div className="close-button">
        <a href="login.html" id="login-back">&#8249;</a>
      </div>
      <div className="language-selection">
        <center>
          <h2 id='header'>Learning Language</h2><br/>
        </center>
      </div>
      <div className="cards-container">
        <Link className="card-link" to="/Disability">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC9mA50uVbyafWl4VOofCzp65_eW4D0w2rXsPzVsGYIn7s12wefvN376-PFqT3UncvNQ&usqp=CAU" className="card-img-top" id="image1" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title">Hindi Language</h5>
                <p className="card-text">Start from scratch!</p>
              </div>
            </center>
          </div>
          </Link>
        <a href="link_to_english_page.html" className="card-link">
          <div className="card" style={{ width: '18rem' }}>
            <center>
              <img src="https://th.bing.com/th?id=OIP.wguKltr8zASXbpLehGbt5gHaIr&w=230&h=270&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"  id="image2" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">English Language</h5>
                <p className="card-text">Start from scratch!</p>
              </div>
            </center>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Learning;
