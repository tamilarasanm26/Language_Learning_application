import React from 'react';
import './Home.css'; // Assuming you have the CSS files imported and available
import './Responsive.css'; // Assuming you have the CSS files imported and available
import './Bootstrap.css'; // Assuming you have the CSS files imported and available
import logo from './images/logo.png';
import image1 from './images/3D-image1.jpg';
import image2 from './images/3D-image2.jpg';
import image3 from './images/3D-image3-removebg-preview.png';
import image4 from './images/3D-image4-removebg-preview.png';
import fbIcon from './images/fb.png';
import twitterIcon from './images/twitter.png';
import linkedinIcon from './images/linkedin.png';
import instagramIcon from './images/instagram.png';
import youtubeIcon from './images/youtube.png';
import locationIcon from './images/location.png';
import mailIcon from './images/mail.png';
import callIcon from './images/call.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="hero_area">
        {/* Header section starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html"> 
                <img src={logo} alt="Maverick Logo" />
                <h1 >Maverick</h1>
              </a>
            </nav>
          </div>
        </header>

        <section className="slider_section " id="get-started">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1>Fun and Effective way to learn a language!</h1>
                      <div className="btn-box">
                        <Link className="btn-1" to="/Learning">GET Started</Link>
                        
    
                        <a href="login.html" className="btn-2">
                          LOGIN HERE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-4 img-container">
                    <div className="img-box">
                      <img src={image2} alt="3D Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="img-box">
                  <img src={image1} height="500px" alt="3D Image" id="image" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>free. fun. effective.</h2>
                  </div>
                  <p>
                    Learning with Maverick is fun, Its bite-sized lessons, easy understanding with gamified lessons,
                    while gaining real-world communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience_section layout_padding" id="sec">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>backed by science</h2>
                  </div>
                  <p>
                    We use a combination of research-backed teaching methods and delightful content to create courses
                    that effectively teach reading, writing, listening, and speaking skills!
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="img-box">
                  <img src={image3} alt="3D Image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="img-box">
                  <img src={image4} alt="3D Image" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>stay motivated</h2>
                  </div>
                  <p>
                    We make it easy to form a habit of language learning with game-like features, fun challenges, and
                    reminders from our friendly Partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info section */}
        <section className="info_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="info_contact">
                  <h5>Address</h5>
                  <p>
                    <img src={locationIcon} alt="Location Icon" />
                    Location, Country
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info_contact">
                  <h5>Email</h5>
                  <p>
                    <img src={mailIcon} alt="Mail Icon" />
                    info@maverick.com
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info_contact">
                  <h5>Phone</h5>
                  <p>
                    <img src={callIcon} alt="Call Icon" />
                    +123456789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social media section */}
        <section className="info_section layout_padding">
          <div className="container">
            <div className="social_container">
              <a href="https://www.facebook.com/">
                <img src={fbIcon} alt="Facebook Icon" />
              </a>
              <a href="https://twitter.com/">
                <img src={twitterIcon} alt="Twitter Icon" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedinIcon} alt="Linkedin Icon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagramIcon} alt="Instagram Icon" />
              </a>
              <a href="https://www.youtube.com/">
                <img src={youtubeIcon} alt="Youtube Icon" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <footer className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear">2024</span> All Rights Reserved | Design by{' '}
              <a href="https://www.linkedin.com/in/sarthak-nath-08a5b4193/"> Sarthak Nath</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
