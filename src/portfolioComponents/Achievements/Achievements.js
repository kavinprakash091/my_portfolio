import React from 'react'
import './Achievements.css'
import Achievement from './Achievement'
import Footer from '../Home/Footer'
import Line from '../Line/Line'

export default function Achievements(props) {
  return (
    <div className='achievements-container' id='achievements'>
        <div className='header-container'>
            <h1>{props.header}</h1>
            <h5>{props.subheader}</h5>
        </div>
        <Line></Line>
        <div className='achievements-background-container'>
            <Achievement></Achievement>
            <Footer></Footer>
        </div>
    </div>
  )
}
