import React, { useState } from 'react';
import './Courses.css';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  category: string;
}

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      description: 'Learn the basics of web development including HTML, CSS, and JavaScript.',
      duration: '12 weeks',
      level: 'Beginner',
      price: '$299',
      image: 'images/course-1-1.png',
      category: 'development'
    },
    {
      id: 2,
      title: 'Advanced Engineering Principles',
      description: 'Deep dive into engineering concepts and practical applications.',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$399',
      image: 'images/course-1-2.png',
      category: 'engineering'
    },
    {
      id: 3,
      title: 'Mathematics for Computer Science',
      description: 'Essential mathematical concepts for computer science and programming.',
      duration: '14 weeks',
      level: 'Intermediate',
      price: '$349',
      image: 'images/course-1-3.png',
      category: 'mathematics'
    },
    {
      id: 4,
      title: 'Modern Science Applications',
      description: 'Explore cutting-edge scientific discoveries and their real-world applications.',
      duration: '10 weeks',
      level: 'Beginner',
      price: '$249',
      image: 'images/course-1-4.png',
      category: 'science'
    },
    {
      id: 5,
      title: 'Teaching Methodologies',
      description: 'Learn effective teaching strategies and educational psychology.',
      duration: '18 weeks',
      level: 'Intermediate',
      price: '$379',
      image: 'images/course-1-5.png',
      category: 'teaching'
    },
    {
      id: 6,
      title: 'Graphic Design Mastery',
      description: 'Master the principles of graphic design and visual communication.',
      duration: '15 weeks',
      level: 'Advanced',
      price: '$429',
      image: 'images/course-1-6.png',
      category: 'design'
    },
    {
      id: 7,
      title: 'Data Science Fundamentals',
      description: 'Introduction to data analysis, statistics, and machine learning.',
      duration: '20 weeks',
      level: 'Intermediate',
      price: '$499',
      image: 'images/course-1-1.png',
      category: 'science'
    },
    {
      id: 8,
      title: 'Business Management',
      description: 'Learn essential business management and leadership skills.',
      duration: '12 weeks',
      level: 'Beginner',
      price: '$299',
      image: 'images/course-1-2.png',
      category: 'business'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Science' },
    { id: 'teaching', name: 'Teaching' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="container">
      <section className="courses-page">
        <div className="courses-page__content">
          <h1 className="courses-page__heading">Our Courses</h1>
          
          {/* Category Filter */}
          <div className="courses-page__filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="courses-page__grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-card__image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-card__overlay">
                    <span className="course-card__level">{course.level}</span>
                  </div>
                </div>
                
                <div className="course-card__content">
                  <h3 className="course-card__title">{course.title}</h3>
                  <p className="course-card__description">{course.description}</p>
                  
                  <div className="course-card__details">
                    <span className="course-card__duration">
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                    <span className="course-card__price">{course.price}</span>
                  </div>
                  
                  <button className="btn course-card__btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="courses-page__empty">
              <p>No courses found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
