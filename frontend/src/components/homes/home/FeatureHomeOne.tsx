
import React from 'react';

const FeatureHomeOne = () => {
  return (
    <>
      <section className="feature-section">
            <div className="row gx-0 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                <div className="col wow fadeInUp">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-teacher"></i>    
                        </div>
                        <div className="content">
                            <h3>Expert Instructors</h3>
                            <p>
                                Expert instructors play a pivotal role in the learning process
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".2s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-online-education"></i>
                        </div>
                        <div className="content">
                            <h3>150+ Online Courses</h3>
                            <p>
                                Access expert-led online courses anytime, anywhere to achieve your goals
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".4s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-community"></i>   
                        </div>
                        <div className="content">
                            <h3>100k+ Demo classes</h3>
                            <p>
                                Join 100k+ demo classes and explore your endless potential today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".6s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-membership"></i>    
                        </div>
                        <div className="content">
                            <h3>50k+ Members</h3>
                            <p>
                                Experience the power of 50k+ members connecting, collaborating, and succeeding.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".8s">
                    <div className="feature-box-items">
                        <div className="icon">
                            <i className="flaticon-group"></i>    
                        </div>
                        <div className="content">
                            <h3>100k+ Students</h3>
                            <p>
                                Join 100k+ students already learning and achieving their goals today
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FeatureHomeOne;