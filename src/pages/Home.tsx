import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { subjects } from "../assets/assets";
import "./Home.css";

interface Subject {
  id: number;
  title: string;
  modules: number;
  image: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>(
    []
  );

  const subjects: Subject[] = [
    {
      id: 1,
      title: "Graphic Design",
      modules: 11,
      image: "subjects.sbj1",
    },
    {
      id: 2,
      title: "Mathematics",
      modules: 12,
      image: "subjects.sbj2",
    },
    {
      id: 3,
      title: "Teaching",
      modules: 12,
      image: "subjects.sbj3",
    },
    {
      id: 4,
      title: "Development",
      modules: 14,
      image: "subjects.sbj4",
    },
    {
      id: 5,
      title: "Science",
      modules: 13,
      image: "subjects.sbj5",
    },
    {
      id: 6,
      title: "Engineering",
      modules: 10,
      image: "subjects.sbj6",
    },
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      image: "images/course-1-1.png",
    },
    {
      id: 2,
      title: "Engineering",
      description:
        "Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.",
      image: "images/course-1-2.png",
    },
    {
      id: 3,
      title: "Mathematics",
      description:
        "Mathematics is the study of representing and reasoning about abstract objects (such as numbers, points, spaces, sets, structures, and games). Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.",
      image: "images/course-1-3.png",
    },
    {
      id: 4,
      title: "Science",
      description:
        "Science is a systematic endeavor that builds and organizes knowledge in the form of testable explanations and predictions about the universe.",
      image: "images/course-1-4.png",
    },
    {
      id: 5,
      title: "Teaching",
      description:
        "Teaching is the practice implemented by a teacher aimed at transmitting skills (knowledge, know-how, and interpersonal skills) to a learner, a student, or any other audience in the context of an educational institution.",
      image: "images/course-1-5.png",
    },
    {
      id: 6,
      title: "Designing",
      description:
        "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process or the result of that plan or specification in the form of a prototype, product, or process. The verb to design expresses the process of developing a design.",
      image: "images/course-1-6.png",
    },
  ];

  const heroSlides = [
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const toggleDescription = (courseId: number) => {
    setExpandedDescriptions((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="home">
        <div className="slider-container">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((image, index) => (
              <section
                key={index}
                className="home__info"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="content">
                  <h3>The best courses you will find here!</h3>
                  <Link to="/courses" className="btn">
                    get started
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects">
        <h1 className="subjects__heading">Our popular subjects</h1>
        <div className="subjects__row">
          {subjects.map((subject) => (
            <div key={subject.id} className="subject">
              <img src={subject.image} alt="" className="subject__image" />
              <div className="subject__content">
                <h3 className="subject__title">{subject.title}</h3>
                <p className="subject__modules">{subject.modules} modules</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h1 className="courses__heading">Our Popular Courses</h1>
        <div className="courses__slider">
          {courses.map((course) => (
            <div key={course.id} className="courses__slide">
              <img className="courses__image" src={course.image} alt="" />
              <div className="courses__content">
                <h3 className="courses__title">{course.title}</h3>
                <p
                  className={`description ${
                    expandedDescriptions.includes(course.id) ? "expanded" : ""
                  }`}
                >
                  {course.description}
                </p>
                <button
                  className="btn read-more"
                  onClick={() => toggleDescription(course.id)}
                >
                  {expandedDescriptions.includes(course.id)
                    ? "Read Less"
                    : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
