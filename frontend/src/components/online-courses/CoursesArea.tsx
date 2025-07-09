"use client";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Course {
  _id: string;
  courseName: string;
  slug: string;
  coursesPageImage: string;
  modules: { title: string; description: string }[];
}

const CoursesArea = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const selectHandler = (e: any) => {};

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses`
        );


        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <section className="popular-courses-section fix section-padding">
        <div className="container">
          <div className="coureses-notices-wrapper">
            <div className="courses-showing">
              <div className="icon-items">
                <Link href="/courses-grid">
                  <i className="fas fa-th"></i>
                </Link>
                <Link href="/courses-list">
                  <i className="fas fa-bars"></i>
                </Link>
              </div>
              <h5>
                Showing <span>1-9</span> Of <span>62</span> Results
              </h5>
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
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            {courses.map((course) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={course._id}>
                <div className="courses-card-main-items">
                  <div className="courses-card-items style-2">
                    <div className="courses-image">
                      <img src={course.coursesPageImage} alt="img" />
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
                        <Link href={`/online-courses/${course.slug}`}>{course.courseName}</Link>
                      </h3>
                      {/* <div className="client-items">
                        <div
                          className="client-img bg-cover"
                          style={{
                            background: `url(/assets/img/courses/client-1.png)`,
                          }}></div>
                        <p>Paul C. Deleon</p>
                      </div> */}
                      <ul className="post-class">
                        <li>
                          <i className="far fa-books"></i>
                          {course.modules?.length || 0} Modules
                        </li>
                        <li>
                          <i className="far fa-user"></i>
                          80 Students
                        </li>
                        <li>
                          <Link href={`/online-courses/${course.slug}`} className="theme-btn">
                            Enroll Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="page-nav-wrap pt-5 text-center">
            <ul>
              <li>
                <a className="page-numbers" href="#">
                  1
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  4
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  <i className="far fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesArea;
