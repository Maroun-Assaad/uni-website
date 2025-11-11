import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <div className="footer__div__share">
            <h3 className="footer__logo">
              <i className="fa fa-university"></i>University
            </h3>
            <div>
              <ul className="footer__share">
                <li>
                  <a href="#" className="footer__share__link fab fa-facebook-f"></a>
                </li>
                <li>
                  <a href="#" className="footer__share__link fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="footer__share__link fab fa-instagram"></a>
                </li>
                <li>
                  <a href="#" className="footer__share__link fab fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="footer__h3">Quick Links</h3>
          <Link to="/" className="footer__quicklink link fas fa-home">
            Home
          </Link>
          <Link to="/about" className="footer__quicklink link fas fa-info-circle">
            About
          </Link>
          <Link to="/courses" className="footer__quicklink link fas fa-book">
            Courses
          </Link>
          <Link to="/contact" className="footer__quicklink link fa fa-mobile">
            Contact us
          </Link>
          <Link to="/account" className="footer__quicklink link fas fa-user">
            Login/Sign Up
          </Link>
        </div>

        <div className="footer__section">
          <h3 className="footer__h3">Useful Links</h3>
          <a href="#" className="footer__usefullink link">Help Center</a>
          <a href="#" className="footer__usefullink link">Ask Questions</a>
          <a href="#" className="footer__usefullink link">Send Feedback</a>
          <a href="#" className="footer__usefullink link">Private Policy</a>
          <a href="#" className="footer__usefullink link">Terms Of Use</a>
        </div>

        <div className="footer__section">
          <h3 className="footer__h3">NewsLetter</h3>
          <p className="footer__p">Subscribe for latest updates</p>
          <form action="">
            <input
              className="footer__input"
              type="email"
              name=""
              placeholder="enter your email"
              id=""
              required
            />
            <input className="btn" type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <p className="footer__copyright">
        &copy; Website 2024 (&copy; Maroun Assaad)
      </p>
    </footer>
  );
};

export default Footer;
