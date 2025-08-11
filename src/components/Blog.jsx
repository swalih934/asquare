import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Blog.css' 

function Blog() {
  return (
    <>
      <div style={{ marginTop: '100px' }} className="text-center mb-5">
        <p style={{ fontSize: '36px', fontWeight: '800', lineHeight: '36px', color: 'rgb(244, 20, 103)', fontFamily: 'Nunito Sans, sans-serif', }} >
          Analytics Reports by Learners
        </p>
      </div>

      <div className="container">
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div className="d-flex flex-column justify-content-between h-100" style={{ minHeight: '400px' }}>
              <div
                className="p-4 background-image-hover"
                style={{
                  backgroundImage: `url('https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/NBA-Analysis-590x430.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '300px',
                  borderRadius: '10px',
                }}
              >
                <div style={{ marginTop: '100px' }}>
                  <p style={{ color: 'white', fontWeight: '500' }}>Blogs</p>
                  <h2 style={{ color: 'white', fontWeight: '500', marginTop: '0px' }}>NBA Games Analysis</h2>
                </div>
              </div>

              <div style={{ height: '300px' }}></div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="p-2">
              <Row className="gy-4">
                <Col xs={12} sm={6}>
                  <div className="shadow rounded overflow-hidden h-100">
                    <img
                      className="img-fluid w-100 image-hover-effect"
                      style={{ borderRadius: '10px 10px 0 0' }}
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/Movie-Analysis-2025-590x430.jpg"
                      alt=""
                    />
                    <div className="p-3">
                      <h5>IMDb Movie Analysis</h5>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <i className="fa-regular fa-calendar-days" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0" style={{ color: "#adafb3" }}>31 Jul, 2025</p>
                        <i className="fa-regular fa-comment ms-2" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0 ms-1" style={{ color: "#adafb3" }}>0 Cmnts</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6}>
                  <div className="shadow rounded overflow-hidden h-100">
                    <img
                      className="img-fluid w-100 image-hover-effect"
                      style={{ borderRadius: '10px 10px 0 0' }}
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/Airpollution-and-Disease-analysis-590x430.png"
                      alt=""
                    />
                    <div className="p-3">
                      <h5>Air Quality Health Impact Dashboard</h5>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <i className="fa-regular fa-calendar-days" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0" style={{ color: "#adafb3" }}>31 Jul, 2025</p>
                        <i className="fa-regular fa-comment ms-2" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0 ms-1" style={{ color: "#adafb3" }}>5 Cmnts</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6}>
                  <div className="shadow rounded overflow-hidden h-100">
                    <img
                      className="img-fluid w-100 image-hover-effect"
                      style={{ borderRadius: '10px 10px 0 0' }}
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/crop-production-June-2025-590x430.jpg"
                      alt=""
                    />
                    <div className="p-3">
                      <h5>Crop Production Analysis India (1997–2020)</h5>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <i className="fa-regular fa-calendar-days" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0" style={{ color: "#adafb3" }}>31 Jul, 2025</p>
                        <i className="fa-regular fa-comment ms-2" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0 ms-1" style={{ color: "#adafb3" }}>1 Cmnts</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6}>
                  <div className="shadow rounded overflow-hidden h-100">
                    <img
                      className="img-fluid w-100 image-hover-effect"
                      style={{ borderRadius: '10px 10px 0 0' }}
                      src="https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-25-at-9.59.12-AM-e1750825845686-590x430.jpeg"
                      alt=""
                    />
                    <div className="p-3">
                      <h5>Asquare Technologies Signs MOU With BHA</h5>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <i className="fa-regular fa-calendar-days" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0" style={{ color: "#adafb3" }}>31 Jul, 2025</p>
                        <i className="fa-regular fa-comment ms-2" style={{ color: "#adafb3" }}></i>
                        <p className="mb-0 ms-1" style={{ color: "#adafb3" }}>2 Cmnts</p>
                      </div>
                    </div>
                  </div>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Blog
