"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const CoursesArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
       <section className="popular-courses-section fix section-padding">
            <div className="container">
                <div className="coureses-notices-wrapper">
                    <div className="courses-showing">
                        <div className="icon-items">
                            <Link href="/courses-grid"><i className="fas fa-th"></i></Link>
                            <Link href="/courses-list"><i className="fas fa-bars"></i></Link>
                        </div>
                        <h5>Showing <span>1-9</span> Of <span>62</span> Results</h5>
                    </div>
                    <div className="form-clt"> 
                        <NiceSelect
                          className="category"
                          options={[
                            { value: "01", text: "Sort by : Default" },
                            { value: "02", text: "Sort by popularity" },
                            { value: "03", text: "Sort by average rating" },
                            { value: "04", text: "Sort by latest" }, 
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                     </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/09.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                           Foundation Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/10.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                           Ignite Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/11.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off <br /> </h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                           Explorer Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/12.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off <br /> </h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Advance Edge Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/13.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off <br /> </h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                           Trader Pro Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/14.jpg" alt="img" />
                                    <h3 className="courses-title"></h3>
                                    <h4 className="topic-title">25% Off</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Stocks</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                           Market Master Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-nav-wrap pt-5 text-center">
                    <ul>
                        <li><a className="page-numbers" href="#">1</a></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesArea;