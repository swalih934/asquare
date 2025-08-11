import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import './ninth.css'

function Ninth() {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    // const responsivee = {

    //         desktop: {
    //             breakpoint: { max: 3000, min: 1024 },
    //             items: 3,
    //         },

    //         mobile: {
    //             breakpoint: { max: 464, min: 0 },
    //             items: 1,
    //         },
    //     };

    const cardData = [
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/gayatri-nayar.webp', name: 'Gayathri nair', Description: ' "The classes were really good and all your doubts are It can also be To provide effective feedback, focus on specific behaviors, make it timely and constructive, and maintain a positive and respectful tone" ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/unnamed-1.webp', name: 'Rahul', Description: ' "all your doubts are It can also be The classes were really good and  Good feedback should help the recipient improve by offering clear examples and actionable suggestions, while also acknowledging their strengths"  ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/p2.webp', name: 'Saju Thomas', job: 'business Analyst', Description: ' "In the future, could you practice projecting your voice more and try to maintain eye contact with the audience? This would help them feel more engaged"  ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/unnamed.webp', name: 'Varun C', Description: ' "Instead of saying Youre not a good presenter,you could say, During the presentation last week, I notice you seemed nervous and your voice was sometimes hard to hear" ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/unnamed-1.webp', name: 'Srijith Ur', Description: ' "Its important to be timely, respectful, and  on the impact of the behavior, rather than making personal judgments. Remember to balance criticism with positive"  ' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/tt.webp', name: 'Vishnu Anoop', Description: ' "Giving constructive feedback involves focusing on specific behaviors, providing examples, and suggesting improvements"  ' },

    ];
    return (
        <>

           <div className="container mt-5 p-4">
      <Row className="align-items-center">
        <Col md={6} sm={12} className="mb-4 mb-md-0 text-center">
          <img
            className="img-fluid review-image"
            src="https://asquaretechnologiesweb.com/wp-content/uploads/elementor/thumbs/pikaso_texttoimage_35mm-film-photography-A-coding-workshop-in-a-brigh-e1723972595730-qss8qnayyv8msor3orisxwrd81447v7z1dloa2e4js.webp"
            alt="Student Workshop"
          />
        </Col>

        <Col md={6} sm={12} className="p-3">
          <div className="review-header mb-4">
            <p className="section-title">DASHBOARDS</p>
            <p className="section-subtitle">Hear from Our Students</p>
          </div>

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
          >
            {cardData.map((card, idx) => (
              <div key={idx} className="review-card p-3">
                <p className="review-description">{card.Description}</p>
                <h4 className="review-name">{card.name}</h4>
                <h6 className="review-job">{card.job}</h6>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>

        </>)
}

export default Ninth