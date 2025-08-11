import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';

function Third() {

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
        { img: 'https://lh3.googleusercontent.com/a/ACg8ocLmfYqT9fGU73K7_nhZIM_xZai3wYXQ8zJnCRgJbcWcrJ5BNA=w40-h40-c-rp-mo-br100', title: 'sumayasumi', pin: '  The Best Place to develop your career 👍😎 You can mold your skills and intelligence perfectly 🫡', Date: '4 June 2025' },
        { img: 'https://lh3.googleusercontent.com/a-/ALV-UjXlFVshBngswOj7ngI--MLRp9JVRpv1YPFrkwgzttCxWFQlwl_0=w40-h40-c-rp-mo-br100', title: 'Thashreefa S', pin: 'Have high quality staffs and good placement assistance', Date: '4 June 2025' },
        { img: 'https://lh3.googleusercontent.com/a-/ALV-UjXVzDblIRlgY9s5wzNepDBZwoAYnUPsjrqVes7g05pNgmK1LaI=w40-h40-c-rp-mo-br100', title: 'Akshay C', pin: ' Well trained tutors and a good environment for learning the skills. Thanks Asquare Technologies. ', Date: '24 May 2025' },
        { img: 'https://lh3.googleusercontent.com/a-/ALV-UjVc8mi_BNE5BjHRfbi6VUmolCplhcAUBvrgDdmuhmSdiOyOOukC=w40-h40-c-rp-mo-br100', title: 'Vaishak Ajay ', pin: ' An outstanding institute with experienced faculty, a supportive environment to study. Highly recommend it', Date: '30 May 2025' },
        { img: 'https://lh3.googleusercontent.com/a-/ALV-UjX4ysBSJY66fxYb-UvNB9j7fmFloyYrrWasiixxlRjTNabpr6Dc=w40-h40-c-rp-mo-br100', title: 'Muhammed Sha', pin: '  The training was comprehensive, and the faculty were knowledgeable and supportive.', Date: '16 June 2025' },
        { img: 'https://lh3.googleusercontent.com/a/ACg8ocK5dNcq8y-djzHCAy9ANIhsEQix_R3Pwa4U9ArglXiCDxjnFw=w40-h40-c-rp-mo-br100', title: 'Tushar Joshi', pin: '  Best trainer', Date: '13 June 2025' },

    ];
    return (
        <>
            <div className="container">
                <Row>
                
                    <Col
                        md={4}
                        className="d-flex flex-column justify-content-center align-items-center text-center p-4"
                    >
                        <h3 className="mb-3">EXCELLENT</h3>
                        <div className="mb-3">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star fa-xl" style={{ color: "#FFD43B" }}></i>
                            ))}
                        </div>
                        <h6 className="mb-2">
                            Based on <Link href="#">509 reviews</Link>
                        </h6>
                        <img
                            src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                            alt="Google"
                            className="img-fluid"
                            style={{ width: '100px', height: 'auto' }}
                        />
                    </Col>

                    <Col md={8}>



                        <Carousel
                            className='mx-5 mb-5'
                            responsive={responsive}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            showDots={false}
                            swipeable={true}
                            draggable={true}
                            keyBoardControl={true}
                        >
                            {cardData.map((cardData, idx) => (
                                <div>
                                    <div className="row p-2">
                                        <div className="col-3 d-flex align-items-center">
                                            <img
                                                className="img-fluid rounded-circle"
                                                src={cardData.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-6">
                                            <h6 className="mb-0">{cardData.title}</h6>
                                            <p className="text-muted small mb-1">{cardData.Date}</p>
                                        </div>
                                        <div className="col-3 text-end">
                                            <img
                                                className="img-fluid rounded-circle"
                                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }}></i>
                                            ))}
                                        </div>
                                        <div className="m-0">
                                            <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: '500' }} className="card-text">
                                                {cardData.pin}                    </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>


                    </Col>
                </Row>
                <p className='text-end mt-2' style={{ fontWeight: '500', lineHeight: '21px', fontSize: '15px' }}>Showing our latest reviews</p>
            </div>




        </>)
}

export default Third