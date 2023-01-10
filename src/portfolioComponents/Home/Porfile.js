import React from 'react'
import './Profile.css';
import Typical from 'react-typical';

export default function Porfile() {
  return (
    <div className='profile-container'>
      <div className='profile-details-container'>
        <div className='social-media-container'>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-square-google-plus"></i>
            </a>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href='https://www.google.com'>
                <i class="fa-brands fa-square-github"></i>
            </a>
        </div>
        <div className='profile-name-container'>
            <h2>Hello, I'm <span className='profile-name'>Kavin</span></h2>
        </div>
        <div className='profile-role-container'>
            <h1>
            <Typical 
            loop={Infinity}
            steps ={[
                'Front-end designer 😛',
                1000,
                'Front-end Dev 📱',
                1000,
                'SQL/PHP Dev 💻',
                1000,
                'React js Dev 😎',
                1000,
                'MERN Stack Dev 😈',
                1000,
            ]}
            />
            </h1>
        </div>
        <div className='profile-tagline'>
            <h5>Knack of building applications with front and back end operations</h5>
        </div>
        <div className='button-container'>
            <button className='hire-me-button'>Hire Me</button>
            <a href='KAVIN_P.pdf' download="KAVIN P.pdf">
                <button className='get-resume-button'>Get Resume</button>
            </a>
        </div>
      </div>
      <div className='profile-image-container'>
            <div className='profile-photo-container'>

            </div>
            
      </div>
    </div>
  )
}
