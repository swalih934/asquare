import React from 'react'
import Carousel from 'react-multi-carousel';

function Eleven() {
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
<div className="text-center mt-5 mb-5">
                <p style={{ fontSize: '16px', fontWeight: '800', lineHeight: '26px', color: 'rgb(244, 20, 103)', fontFamily: 'Nunito Sans, sans-serif' }}>
                    Our Alumni Work At</p>
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

</>  )
}

export default Eleven