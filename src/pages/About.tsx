import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <section className="about">
        <div className="about__content">
          <h1 className="about__heading">About Our University</h1>
          
          <div className="about__info">
            <div className="about__text">
              <h2>Welcome to Our University</h2>
              <p>
                We are committed to providing the highest quality education to our students. 
                Our university offers a wide range of courses and programs designed to prepare 
                students for successful careers in their chosen fields.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                To provide accessible, high-quality education that empowers students to achieve 
                their academic and professional goals while contributing positively to society.
              </p>
              
              <h3>Our Vision</h3>
              <p>
                To be a leading institution of higher education, recognized for academic excellence, 
                innovation, and commitment to student success.
              </p>
              
              <h3>Core Values</h3>
              <ul>
                <li>Academic Excellence</li>
                <li>Innovation and Creativity</li>
                <li>Diversity and Inclusion</li>
                <li>Integrity and Ethics</li>
                <li>Student-Centered Learning</li>
              </ul>
            </div>
            
            <div className="about__stats">
              <div className="stat">
                <h3>5000+</h3>
                <p>Students Enrolled</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Expert Faculty</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Programs Offered</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>Graduation Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
