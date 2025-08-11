import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './fourth.css';

function Fourth() {
  const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const profiles = [
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2021-10-05-at-1.18.41-PM-e1634108498426-284x300-1.webp',
      name: 'Karthika Radhakrishnan',
      position: 'Data Analyst, UST, Kochi',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2021-08-01-at-10.00.31-PM-1-e1628272818240-300x300-1.webp',
      name: 'Athira Krishna',
      position: 'Maury Tech, Bengaluru',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2021-08-06-at-8.50.10-AM-1-e1628278707924-300x300-1.webp',
      name: 'Varun C',
      position: 'Data Analyst Intern',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/11/jyothi_edited-300x300.webp',
      name: 'Jyothy',
      position: 'BI Developer, Nest Digital',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/Albert-Johnson-1-292x300.webp',
      name: 'Albert Johnson',
      position: 'BI Developer, Genpact Pune',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/shahan-1-300x300.webp',
      name: 'Shahansha',
      position: 'BI Developer, Geogith Kochi',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2021-07-08-at-7.52.15-PM-e1628272705607-300x300-1.webp',
      name: 'Sreerag Warrior',
      position: 'Software Developer, EY, Cochin',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2021-07-08-at-8.04.34-PM-e1628272607756-300x300-1.webp',
      name: 'Reji Thangachan',
      position: 'Data Analyst, Geogith Kochi',
    },
    {
      img: 'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/athira-e1628514974722-300x300-1.webp',
      name: 'Athira Raj',
      position: 'Data Analyst, Cochin',
    },
  ];

  return (
    <>
     <div className="text-center mt-5">
  <p className="section-title">PLACEMENTS</p>
  <h3 className="section-heading">From Trainee to Trailblazer</h3>
  <p className="section-subheading">
    Celebrating our successful journey from learning to earning
  </p>
</div>


      <Carousel
        className='mx-5 mb-5'
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={false}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
      >
        {profiles.map((profile, idx) => (
          <div key={idx} className='profile-item'>
            <div className='avatar-wrapper'>
              <img
                src={profile.img}
                alt={profile.name}
                className='avatar-img'
              />
            </div>
            <h5  className='profile-name hover-red'>{profile.name}</h5>
            <p className='profile-position hover-red'>{profile.position}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Fourth;
