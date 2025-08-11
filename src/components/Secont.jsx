import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import './secont.css'

function Secont() {
     const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const cardData = [
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-06.webp'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-160044-768x285.png'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-01.webp'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-02.webp'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-03.webp'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-04.webp'},

    ];
  return (
<>
<div className='container '>
    <Row>
       <Col md={4} className="placement-header text-center d-flex align-items-center justify-content-center">
  <h2 className="placement-title">Placement Partners</h2>
</Col>

        <Col md={8}>
        
       

     <div className="carousel-wrapper container">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            showDots={false}
            swipeable
            draggable
            keyBoardControl
            arrows={false}
            renderButtonGroupOutside
          >
            {cardData.map((card, idx) => (
              <div key={idx} className="carousel-item-space">
                <div className="card-conte ">
                  <img
                    className="img-fluid"
                    src={card.img}
                    alt={card.title}
                    style={{ objectFit: 'cover', height: '120px', width: '100%',fontSize:'16px' }}
                  />
                  
                </div>
              </div>
            ))}
          </Carousel>
        </div>


        </Col>
    </Row>

</div>

</>  )
}

export default Secont