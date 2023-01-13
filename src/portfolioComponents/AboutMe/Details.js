import React from 'react'
import './Details.css'
import Line from '../Line/Line'

export default function Details(props) {
  return (
    <div className='details-container' id='aboutme'>
        <div className='header-container'>
            <h1>{props.header}</h1>
            <h5>{props.subheader}</h5>
        </div>
        <Line></Line>
        <div className='detail-container'>
            <div className='image-container'>
                <img src={require('../../assets/Home/Kavin.JPG')} alt='Kavin'/>
            </div>
            <div className='qualification-detail-container'>
                <div className='qualification'>
                    <p>Full stack web development with background knowledge of MERN stacks with redux, along with knack of building applications with utmost efficiency. Strong professional development with MySQL using PHP.</p>
                </div>
                <div className='highlights'>
                    <h2>Here are a Few Highlights:</h2>
                    <ul className='list-highlights'>
                        <li><span className='list-highlights-value'>Full stack web development</span></li>
                        <li><span className='list-highlights-value'>Interactive Front end as per design</span></li>
                        <li><span className='list-highlights-value'>React js</span></li>
                        <li><span className='list-highlights-value'>HTML, CSS, JAVASCRIPT</span></li>
                        <li><span className='list-highlights-value'>MySQL, PHP</span></li>
                        <li><span className='list-highlights-value'>MERN Stack</span></li>
                    </ul>
                </div>
                <div className='button-container1'>
                    <a href='#contactme'><button className='hire-me-button1'>Hire Me</button></a>
                    <a href="KAVIN_P.pdf" download='kavin.pdf'>
                        <button className='get-resume-button1'>Get Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
