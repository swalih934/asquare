import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'; 

function Footer() {
  return (
    <div style={{ backgroundColor: 'rgba(18, 6, 71, 1)', color: 'white', padding: '50px 0' }}>
      <div className="container">
        <Row className="gy-5">
          <Col sm={12} md={4}>
            <img
              className="img-fluid mb-3"
              src="https://asquaretechnologiesweb.com/wp-content/uploads/2023/02/asquare-footer-logo-768x768.png"
              alt="Asquare Logo"
              style={{ maxWidth: '120px' }}
            />
            <p>
              A Global Leader in Analytics Training. Empowering thousands of professionals and graduates worldwide with
              industry-focused, expert-led analytics programs.
            </p>
            <div className="d-flex gap-3 mt-3">
              <i className="fa-brands fa-youtube fa-xl text-white"></i>
              <i className="fa-brands fa-square-facebook fa-xl text-white"></i>
              <i className="fa-brands fa-linkedin fa-xl text-white"></i>
              <i className="fa-brands fa-square-instagram fa-xl text-white"></i>
            </div>
            <img
              className="img-fluid mt-4"
              src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/iso.webp"
              alt="ISO Certified"
              style={{ maxWidth: '100px' }}
            />
            <h4 className="mt-3">Branches</h4>
            <h5>Cochin, Coimbatore</h5>
          </Col>

          <Col sm={12} md={3}>
            <h4 className="mt-4 mt-md-0">COURSES</h4>
            <div className="mt-4 footer-links">
              {[
                'Professional Diploma in Data Analytics',
                'Professional Diploma in Business Analytics',
                'Certificate in Microsoft Power BI',
                'Certificate in Tableau Data Visualization',
                'Oracle Business Intelligence(OBIEE)',
                'Oracle SQL Basic and Advanced',
                'Oracle PLSQL Basic and Advanced',
                'Oracle Data Integrator(ODI)',
                'Certificate in Artificial Intelligence',
                'Professional Diploma in Data Science',
              ].map((course, idx) => (
                <p key={idx}>
                  <i className="fa-solid fa-arrow-right fa-sm me-2"></i>
                  {course}
                </p>
              ))}
            </div>
          </Col>

          <Col sm={12} md={2}>
            <h4 className="mt-4 mt-md-0">Useful Links</h4>
            <div className="mt-4 footer-links">
              {['About Us', 'Placements', 'Courses', 'Gallery', 'Blog', 'Contact Us'].map((link, idx) => (
                <p key={idx}>
                  <i className="fa-solid fa-arrow-right fa-sm me-2"></i>
                  {link}
                </p>
              ))}
            </div>
          </Col>

          <Col sm={12} md={3}>
            <h4 className="mt-4 mt-md-0">Contact Info</h4>
            <div className="mt-4 footer-links">
              <p>
                <i className="fa-solid fa-location-dot me-2"></i>
                Asquare Technologies, Achoth Tower, 1st Floor, Infopark Rd, near Kuzhikattumoola Masjid, Kakkanad,
                Kerala 682030
              </p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>+9876543245
              </p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>+8606503456
              </p>
              <p>
                <i className="fa-solid fa-envelope me-2"></i>ashik@asquaretechnologiesweb.com
              </p>
              <p>
                <i className="fa-solid fa-envelope me-2"></i>info@asquaretechnologiesweb.com
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
