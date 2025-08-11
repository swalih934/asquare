import React from 'react'
import { Col, Row } from 'react-bootstrap'
import First from '../components/First'
import Secont from '../components/Secont'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Sixth from '../components/Sixth'
import Eight from '../components/Eight'
import Ninth from '../components/Ninth'
import Tenth from '../components/Tenth'
import Eleven from '../components/Eleven'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Chapter from '../components/Chapter'
import './home.css'
function Home() {
    return (
        <>
<First/>
<Secont/>
<Third/>
<Fourth/>
<Sixth/>
<Chapter/>
<Eight/>
<Ninth/>
<Tenth/>
<Eleven/>
<Blog/>
<Footer/>


 <div className="fixed-bottom-icons">
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="icon-circle bg-green">
    <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="tel:+919876543210" className="icon-circle bg-green">
    <i className="fa-solid fa-phone"></i>
  </a>
</div>



        </>)
}

export default Home