import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './sixth.css';

function Sixth() {
  return (
    <div className="container py-5 px-responsive">
      <Row className="align-items-center">
        <Col md={6} sm={12}>
          <h1 className="career-heading">
            100% Career <br /> Guidance to <br /> Students
          </h1>
          <p className="career-text">
            Empowering Career Success <br />
            We provide end-to-end career guidance—equipping students <br />
            with the right skills, clarity, and confidence to make informed <br />
            decisions and thrive in their professional journey.
          </p>
          <h4 className="subheading">Why Choose Asquare Technologies?</h4>
          <div className="custom-list">
            <p><i className="fas fa-check-circle text-success"></i> ISO 9001:2015 Certified | Approved by STED Council</p>
            <p><i className="fas fa-check-circle text-success"></i> Expert-Led Training by Industry Professionals</p>
            <p><i className="fas fa-check-circle text-success"></i> Live & Interactive Learning Experience</p>
            <p><i className="fas fa-check-circle text-success"></i> Soft Skills Mentorship for Career Growth</p>
            <p><i className="fas fa-check-circle text-success"></i> 100% Placement Support & Guidance</p>
            <p><i className="fas fa-check-circle text-success"></i> Hands-on Projects with Expert Reviews</p>
            <p><i className="fas fa-check-circle text-success"></i> Mock Interviews with Real Industry Feedback</p>
            <p><i className="fas fa-check-circle text-success"></i> Global Internship Opportunity with a Gulf-based Firm</p>
          </div>
          <p className="footer-text">
            🚀 Choose Excellence. Choose Asquare Technologies. Build a Future-Ready Career Today.
          </p>
        </Col>
        <Col md={6} sm={12} className="text-center">
          <img
            src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/pikaso_texttoimage_35mm-film-photography-A-female-teacher-of-Black-de-768x768.webp"
            className="img-fluid mt-4 career-image"
            alt="Career Guide"
          />
        </Col>
      </Row>
      <div className=" mt-4">
        <button style={{backgroundColor:' rgba(235, 23, 99, 1)',color:'white',fontWeight:'bold',borderRadius:'0'}} className="btn btn-view-details">VIEW DETAILS</button>
      </div>
    </div>
  );
}

export default Sixth;
