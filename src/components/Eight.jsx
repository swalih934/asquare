import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import './eight.css'
function Eight() {
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
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/03/DriverLogistics-1024x533-1-590x430.webp', title: 'Driver Logistic Analysis',pin:'Power BI Support' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/03/SuperMarket-Sales-1024x558-2-590x430.webp', title: 'Supermarket Sales Analysis', pin:'Power BI Support'},
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2022/12/HR-Dashboards-1024x543-1-590x430.webp', title: 'HR Dashboard Insight',pin:'Microsoft-Power-BI ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2022/12/Call-Center-Analytics-1024x548-1-1-590x430.webp', title: 'Call Center Analysis',pin:'Microsoft-Power-BI ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2022/11/ABC-SALES-1024x548-1-590x430.webp', title: 'Reginalsales Analysis',pin:'Microsoft-Power-BI ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2022/11/image_2022-11-01_175435054-1024x556-1-590x430.webp', title: 'Walmart Analysis',pin:'Microsoft-Power-BI ' },

    ];

     const ButtonGroup = ({ next, previous }) => (
    <div className="custom-button-group">
      <button className="arrow left" onClick={previous}>‹</button>
      <button className="arrow right" onClick={next}>›</button>
    </div>
  );
    return (
        <>
            <div className="text-center mt-5 mb-5">
                <p className="section-title">DASHBOARDS</p>
                <p style={{ fontSize: '16px', fontWeight: '800', lineHeight: '26px', color: 'rgb(244, 20, 103)', fontFamily: 'Nunito Sans, sans-serif' }}>
                    Analytics Reports by Learners  </p>
            </div>


             <div className="carousel-wrapper container">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        showDots={false}
        swipeable
        draggable
        keyBoardControl
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside
      >
        {cardData.map((card, idx) => (
          <div key={idx} className="carousel-item-space">
            <div className="card-content">
              <img
                className="img-fluid"
                src={card.img}
                alt={card.title}
                style={{ objectFit: 'cover', height: '270px', width: '100%' }}
              />
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-solid fa-tag fa-rotate-90 fa-lg text-danger"></i>
                  <span className="ms-2 text-muted">{card.pin}</span>
                </div>
                <h5 className="card-title mb-5">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
        </>)
}

export default Eight