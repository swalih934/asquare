import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './first.css';

function First() {
  return (
    <>
      <div className="first-carousel-wrapper">
        <Carousel fade indicators={false} className="custom-rounded-carousel shadow custom-carousel-controls">
          
          <Carousel.Item>
            <div className="carousel-full-bg">
              <div className="container h-100 mt-5">
                <div className="row align-items-center py-4">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h4 className="highlight-text mt-5">Build a Smarter Career and Learning Path with Us</h4>
                    <h1 className="main-heading">Best Data Science Training Institute in Kochi</h1>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      Our diploma certification programs are affiliated with the STED Council, ensuring credibility and nationwide recognition.
                    </p>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      Empower your career with future-ready skills and hands-on learning designed to bridge the gap between education and employment.
                    </p>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6 text-center mb-3">
                        <img
                          src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/BEST-ANALYTICS-INSTITUTE-IN-KO-unscreen-2-1.gif"
                          className="img-fluid"
                          alt="Left GIF"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/BEST-ANALYTICS-INSTITUTE-IN-KO-unscreen-1-1.gif"
                          className="img-fluid"
                          alt="Right GIF"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-full-bg">
              <div className="container h-100 py-4 mt-5">
                <div className="row align-items-center">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="main-heading">Learn Anytime, Anywhere!</h1>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      Supercharge your career with our pre-recorded Power BI and Tableau courses. Get hands-on learning from experts, practical insights, and the flexibility to learn anytime, anywhere.
                    </p>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      A 70% boost to your career is just a click away! STED Council, ensuring credibility and nationwide recognition.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/asquaretechnologies-learnfromanywhere.png"
                      alt="Analytics"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-full-bg">
              <div className="container h-100 py-4 mt-5">
                <div className="row align-items-center">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h4 className="highlight-text">Driving Success through Skill-Based Learning</h4>
                    <h1 className="main-heading">Best Analytics Training Institute in Kochi</h1>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      Asquare Technologies is a leading Training and Consulting firm specializing in Job-Oriented Diploma Courses, Industry-Grade Internships and World-Class Analytics Solutions.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      className="img-fluid mb-3 logo-sm"
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/Tableau-Logo__1_-removebg-preview.png"
                      alt="Tableau Logo"
                    />
                    <img
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/WhatsApp_Image_2025-07-30_at_09.26.18-removebg-preview.png"
                      alt="Analytics"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-full-bg">
              <div className="container h-100 py-4 mt-5">
                <div className="row align-items-center mt-5">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h4 className="highlight-text">Future-Ready Learning with Gen AI</h4>
                    <h1 className="main-heading">Best Gen AI Training Institute in Kochi</h1>
                    <p style={{fontSize:'18px',fontWeight:'400',lineHeight:'32px'}} className="sub-paragraph">
                      We offer expert-led programs in Business Analytics, Data Science, Generative AI, and other in-demand software tools tailored to meet current industry needs.
                    </p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/best-genai-institute-kochi.gif"
                      alt="Gen AI"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
}

export default First;
