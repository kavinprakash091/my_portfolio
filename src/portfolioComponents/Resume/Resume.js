import React from 'react'
import Line from '../Line/Line'
import './Resume.css'

export default function Resume(props) {
  return (
    <div className='resume-container' id='resume'>
        <div className='header-container'>
            <h1>{props.header}</h1>
            <h5>{props.subheader}</h5>
        </div>
        <Line></Line>
        <div className='resume-details-container'>
            <div className='resume-list-container'>
                <ul className='resume-menus'>
                    <li><i class="fa-solid fa-user-graduate"></i></li>
                    <li><i class="fa-solid fa-computer"></i></li>
                    <li><i class="fa-solid fa-chart-column"></i></li>
                    <li><i class="fa-solid fa-palette"></i></li>
                    <li><i class="fa-solid fa-handshake-angle"></i></li>
                </ul>
                <ul className='resume-items'>
                    <li>Education</li>
                    <li>Programming Skills</li>
                    <li>Projects</li>
                    <li>Interests</li>
                    <li>Volunteers</li>
                </ul>
            </div>
            <div className='resume-list-detail-container'>
                 <ul className='resume-list-details'>
                    <li>
                        <div className='resume-list-items'>
                            <div className='list-items'>
                                <div className='resume-list-text'>Kongu Engineering College, Perundurai</div>
                                <div className='education'>BE - Computer Science and Engineering - 9.70 cgpa</div>
                            </div>
                            <button className='year-button'>2020 - 2024</button>
                        </div>
                    </li>
                    <li>
                        <div className='resume-list-items'>
                            <div className='list-items'>
                                <div className='resume-list-text'>Saratha Matric Hr Sec School, Gobi</div>
                                <div className='education'>Higher Secondary Certificate - 91.8 %</div>
                            </div>
                            <button className='year-button'>2019 - 2020</button>
                        </div>
                    </li>
                    <li>
                        <div className='resume-list-items'>
                            <div className='list-items'>
                                <div className='resume-list-text'>Saratha Matric Hr Sec School, Gobi</div>
                                <div className='education'>Secondary School Leaving Certificate - 94.6 %</div>
                            </div>
                            <button className='year-button'>2017 - 2018</button>
                        </div>
                    </li>
                 </ul>
            </div>
        </div>
    </div>
  )
}
