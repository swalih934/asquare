import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './seventh.css'
function Chapter() {

    
    const cardData = [
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/asquare-technologies-genai-590x430.png', title: 'Generative AI', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquaretechnologies-qliksense-training-kochi-590x430.jpg', title: 'Certified Qliksense Course', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquare-technologies-python-programming-590x430.jpg', title: 'Certificate in Python Programming', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquaretechnologies-no1-kerala-alteryx-training-center-590x430.jpg', title: 'Certificate in Alteryx', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/08/data-science-new-banner-590x430.webp', title: 'Professional Diploma in Data Science', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/05/Data-Analytics-Benefits-1-590x430.webp', title: 'Professional Diploma in Business Analytics', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/Googles-AI-Fundamentals-Applications-focuses-on-Research-590x430.webp', title: 'Certificate in Artificial Intelligence', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/salesforce-administrator-sfa-590x350.webp', title: 'Certificate in SalesForce Admin with AI', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/Why_is_python_important_for_business_analytics-590x430.webp', title: 'Professional Diploma in Data Analytics', text: 'Description 1', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/03/power-bi-590x430.webp', title: 'Certificate in Microsoft Power BI', text: 'Descrip', lessons: '21', weeks: '24' },
        { img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/03/tableau-590x430.webp', title: 'Certificate in Tableau Data Visualization', text: 'Description 1', lessons: '21', weeks: '24' },

    ];
  return (
<>

 <div className='container'>

                <div className="text-center mt-5">
                    <h3 className="section-heading">Step Into Your Next Chapter</h3>
                    <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '26px', fontFamily: 'Montserrat, sans-serif', color: 'black' }}>
                        Welcome to Our Cutting-Edge Programs in Analytics, Data Science & Generative AI <br />
                        Empower Your Career with Future-Ready Skills – Designed for Fresh Graduates & Working Professionals

                    </p>
                </div>
                <Container className="mt-5">
                    <Row className="row-cols-1 row-cols-md-3 g-4">
                        {cardData.map((card, idx) => (
                            <Col key={idx}>
                             <Card style={{backgroundColor:'rgba(232, 230, 241, 0.42)'}}  className="h-100 card-hover border-0  p-2">
  <Card.Img
    className="img-fluid card-img-top"
    variant="top"
    src={card.img}
    style={{ objectFit: 'cover', height: '200px' }}
  />
  <Card.Body>
    <div className="d-flex flex-wrap align-items-center">
      <p className="mb-0"><i className="fa-regular fa-file-lines" style={{ color: '#ee952f' }}></i></p>
      <span className="ms-1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '22px', color: 'rgb(111, 107, 128)' }}>
        {card.lessons}
      </span>
      <span className="ms-2" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '22px', color: 'rgb(111, 107, 128)' }}>
        Lessons
      </span>
      <p className="mb-0 ms-4"><i style={{ color: '#ee952f' }} className="fa-regular fa-clock"></i></p>
      <span className="ms-1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '22px', color: 'rgb(111, 107, 128)' }}>
        {card.weeks}
      </span>
      <span className="ms-2" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '22px', color: 'rgb(111, 107, 128)' }}>
        weeks
      </span>
    </div>

    <Card.Title style={{ fontSize: '18px', lineHeight: '28px', fontWeight: '800', fontFamily: 'Urbanist, sans-serif' }}>
      {card.title}
    </Card.Title>
  </Card.Body>
</Card>

                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
</>  )
}

export default Chapter