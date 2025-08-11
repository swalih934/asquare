import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './tenth.css'
function Tenth() {
  return (
<>
 <div className="group-discount-section d-flex align-items-center justify-content-center">
      <div className="container">
        <Row className="m-4 align-items-center">
          <Col sm={12} md={6}>
            <h1 className="group-discount-heading">Group Discount</h1>
            <p className="group-discount-text">
              “Bring your friends and benefit from our group discount offer!”
            </p>
            <button
              className="btn groupbutton  mt-3"
              aria-label="Contact us to learn more about group discounts"
            >
              Get In Touch
            </button>
          </Col>

          <Col sm={12} md={6}>
            <img
              className="img-fluid"
              src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/akson-1K8pIbIrhkQ-unsplash-768x471.webp"
              alt="Group of people enjoying a discount"
            />
          </Col>
        </Row>
      </div>
    </div>

</>  )
}

export default Tenth