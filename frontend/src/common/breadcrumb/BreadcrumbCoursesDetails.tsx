
import Link from 'next/link';
import React from 'react';

const BreadcrumbCoursesDetails = () => {
  return (
    <>
       <section className="breadcrumb-wrapper style-2">
        <div className="shape-1">
            <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
        </div>
        <div className="shape-2">
            <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
        </div>
        <div className="dot-shape">
            <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
        </div>
        <div className="vector-shape">
            <img src="assets/img/breadcrumb/Vector.png" alt="img" />
        </div>
        <div className="container">
            <div className="page-heading">
                <ul className="breadcrumb-items">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses-grid">Courses</Link></li>
                    <li className="style-2"> Course Details</li>
                </ul>
                <div className="breadcrumb-content">
                    <h1>Foundation Course</h1>
                    <div className="courses-breadcrumb-items">
                       
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Category</span>
                                <h5>Stocks</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Price</span>
                                <h5>$100.00</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Reviews</span>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <b>(15)</b>
                                </div>
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

export default BreadcrumbCoursesDetails;