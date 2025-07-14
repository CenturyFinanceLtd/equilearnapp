"use client"
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, { useState } from 'react';

interface Module {
  title: string;
  description: string;
}

export interface Course {
  courseName?: string;
  youtubeThumbnail?: string;
  youtubeId?: string;
  programOverview?: string;
  skillsAcquired?: string;
  whatYouLearn?: string[];
  modules?: Module[];
  coursePrice?: string;
  subDescription?: string;
  courseDuration?: string;
  emis?: string;
  skillLevel?: string;
}

const defaultModules: Module[] = [
  {
    title: 'Module 1 : Learning the Stock Market Fundamentals',
    description:
      'Understand the basics of the share market, like the reasons behind the change in price. Understand stocks, indices like Bank Nifty and Nifty 50, the difference between Intraday and delivery trade, how to open and operate a demat account. This enables you to navigate the Indian Market while building your base of equity skills.',
  },
  {
    title: 'Module 2: Foreign Market Introduction',
    description:
      'Discover the world market - from FTSE 100 to Dow Jones - and how they impact Indian Trading. Understand the basics of trading future and options along with Dollar Index and Gift Nifty. Discover the difference between holding and delivery, along with how the international market impacts your portfolio.',
  },
];

interface Props {
  course?: Course | null;
}

const CoursesDetailsArea = ({ course }: Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
         videoId={course?.youtubeId || "7iA2sd4cGn8"}
      />
      {/* video modal end */}
      <section className="courses-details-section section-padding pt-0">
        <div className="container">
          <div className="courses-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="courses-details-items">
                  <div className="courses-image">
                     <img
                        src={course?.youtubeThumbnail || "/assets/img/courses/details-1.jpg"}
                        alt="img"
                      />
                    <a
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="video-btn ripple video-popup">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="courses-details-content">
                    <ul className="nav">
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s">
                        <a
                          href="#Course"
                          data-bs-toggle="tab"
                          className="nav-link active">
                          Course Info
                        </a>
                      </li>
                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s">
                        <a
                          href="#Module"
                          data-bs-toggle="tab"
                          className="nav-link">
                          Module
                        </a>
                      </li>

                      <li
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s">
                        <a
                          href="#Reviews"
                          data-bs-toggle="tab"
                          className="nav-link bb-none">
                          Reviews
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="Course" className="tab-pane fade show active">
                        <div className="description-content">
                          <h3>Program Overview</h3>
                          <p className="mb-3">
                             {course?.programOverview ||
                                `N/A`}
                          </p>
                          <h3 className="mt-5">Skill You Acquire :</h3>
                          <p>
                           {course?.skillsAcquired ||
                                'N/A'}
                          </p>
                          <h3 className="mt-5">What You'll Master </h3>

                          <div className="row g-4 mb-5">
                            <div className="col-lg-12">
                              <ul className="list-item">
                                 {(course?.whatYouLearn || [
                                    'N/A',
                                  ]).map((item, idx) => (
                                    <li key={idx}>
                                      <i className="fas fa-check-circle"></i>
                                      {item}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="Module" className="tab-pane fade">
                        <div className="course-curriculum-items">
                          <h3>Course Modules</h3>
                          <div className="courses-faq-items">
                            <div className="accordion" id="accordionExample">
                               {(course?.modules?.length ? course.modules : defaultModules).map(
                                  (m, idx) => (
                                    <div className="accordion-item" key={idx}>
                                      <h2 className="accordion-header" id={`heading${idx}`}>
                                        <button
                                          className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#collapse${idx}`}
                                          aria-expanded={idx === 0 ? 'true' : 'false'}
                                          aria-controls={`collapse${idx}`}
                                        >
                                          {m.title}
                                        </button>
                                      </h2>
                                      <div
                                        id={`collapse${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                                        aria-labelledby={`heading${idx}`}
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div className="accordion-body">
                                          <ul>
                                            <li>{m.description}</li>
                                          </ul>
                                        </div>
                                      </div>
                                  </div>
                                )
                                )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="Reviews" className="tab-pane fade">
                        <div className="courses-reviews-items">
                          <h3>Course Reviews</h3>
                          <div className="courses-reviews-box-items">
                            <div className="courses-reviews-box">
                              <div className="reviews-box">
                                <h2>
                                  <span className="count">4.8</span>
                                </h2>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>856+ Reviews</p>
                              </div>
                              <div className="reviews-ratting-right">
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-two"></div>
                                  </div>
                                  <span>(10)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-three"></div>
                                  </div>
                                  <span>(08)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-three"></div>
                                  </div>
                                  <span>(08)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-four"></div>
                                  </div>
                                  <span>(01)</span>
                                </div>
                                <div className="reviews-ratting-item">
                                  <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                    <i className="fas fa-star color-2"></i>
                                  </div>
                                  <div className="progress">
                                    <div className="progress-value style-five"></div>
                                  </div>
                                  <span>(00)</span>
                                </div>
                              </div>
                            </div>
                            <div className="instructors-box-items">
                              <div className="thumb">
                                <img
                                  src="/assets/img/courses/instructors-3.png"
                                  alt="img"
                                />
                              </div>
                              <div className="content">
                                <h4>Maria L</h4>
                                <span>Junior UX Designer</span>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <p>
                                  "I enrolled in this UX/UI design course with
                                  minimal knowledge the field, and it
                                  completely transformed my understanding."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="courses-sidebar-area sticky-style">
                  <div className="courses-items">
                    <div className="courses-image">
                      <img
                          src={course?.coursePageImage || "/assets/img/courses/22.jpg"}
                          alt="img"
                        />
                        <h3 className="courses-title">{course?.courseName || 'Foundation Course'}</h3>
                      <h4 className="topic-title">Stocks</h4>
                      <div className="arrow-items">
                        <div className="GlidingArrow">
                          <img src="/assets/img/courses/a1.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay1">
                          <img src="/assets/img/courses/a2.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay2">
                          <img src="/assets/img/courses/a3.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay3">
                          <img src="/assets/img/courses/a4.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay4">
                          <img src="/assets/img/courses/a5.png" alt="img" />
                        </div>
                        <div className="GlidingArrow delay5">
                          <img src="/assets/img/courses/a6.png" alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="courses-content">
                      <h3>{course?.coursePrice || '₹1900 + GST'}</h3>
                        <p>{course?.subDescription || 'Learn about Equity, European Market Learn about Equity, European Market'}</p>
                      <div className="courses-btn">
                        <Link
                          href="/courses-details"
                          className="theme-btn style-2">
                          Buy Course
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="courses-category-items">
                    <h5>Course Includes:</h5>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Modules
                        </span>
                          <span className="text">{course?.modules?.length || defaultModules.length}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-clock"></i>
                          Duration
                        </span>
                         <span className="text">{course?.courseDuration || 'N/A'}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          EMI Available
                        </span>
                         <span className="text">{course?.emis || "N/A"}</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user"></i>
                          Students
                        </span>
                        <span className="text">50+</span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe"></i>
                          Language
                        </span>
                        <span className="text">English/Hindi</span>
                      </li>

                      <li>
                        <span>
                          <i className="far fa-signal-alt"></i>
                          Skill Level
                        </span>
                       <span className="text">{course?.skillLevel || 'N/A'}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fal fa-medal"></i>
                          Certifications
                        </span>
                        <span className="text"> SEBI-Certified </span>
                      </li>
                    </ul>
                    <Link href="/courses-details" className="share-btn">
                      <i className="fas fa-share"></i> Share this courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesDetailsArea;