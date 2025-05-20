import React, {useState} from 'react';
import aboutme from '../../../images/about-me.jpeg';
import Html from '../../../images/html.png';
import Css from '../../../images/css-3.png';
import Js from '../../../images/js.png';
import Bootstrap from '../../../images/bootstrap.png';
import ReactJs from '../../../images/structure.png';
import Laravel from '../../../images/Laravel.png';
import NodeJs from '../../../images/nodejs.png';
import MySql from '../../../images/database.png';
import Php from '../../../images/php.png';
import MongoDb from '../../../images/MongoDB.png';
import Adobe from '../../../images/photoshop.png';
import Canva from '../../../images/Canva.png';
import Figma from '../../../images/figma.png';
import Git from '../../../images/social.png';
import Github from '../../../images/github.png';
import ExpressJs from '../../../images/Express.png';
import {CodeXml } from 'lucide-react';

const Resume = () => {

  const [activeContent, setActiveContent] = useState('A');

  const [skillSet, setSkillSet] = useState('A');

  const handleSelectChange = (event) => {
    setSkillSet(event.target.value);
  };

  return (
    <section className='resume'>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5">
            <div className='resume-side1'>
              <h2>Why hire me ?</h2>
              <p> I’m dedicated, quick to learn, and I always deliver results.</p>
            </div>

            <ul className='resume-menu'> 
              <li>
              <button
                onClick={() => setActiveContent("A")}
                className={`resume-button ${
                  activeContent === "A" ? "resume-button-active" : ""
                }`}
              >
                Experience
              </button>
              </li>

              <li>
              <button
                onClick={() => setActiveContent("B")}
                className={`resume-button ${
                  activeContent === "B" ? "resume-button-active" : ""
                }`}
              >
                Education
              </button>
              </li>

              <li>
              <button
                onClick={() => setActiveContent("C")}
                className={`resume-button ${
                  activeContent === "C" ? "resume-button-active" : ""
                }`}
              >
                Skills
              </button>
              </li>

              <li>
              <button
                onClick={() => setActiveContent("D")}
                className={`resume-button ${
                  activeContent === "D" ? "resume-button-active" : ""
                }`}
              >
                About me
              </button>
              </li>
            </ul>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  mb-5 resume-info">  
            {/* start code ng experience content */}
            {activeContent === "A" && 
              <div className="text-white ">
                <div>
                  <h3>My Work Experience</h3>
                </div>
                <div className='exp-card'>
                  <span>Oct 2024 up to March 2025 </span>
                  <p>6 Months</p>
                  <h5>BU Planner</h5>
                  <ul>
                    <li>San Miguel Logistics Services Incorporated</li>
                  </ul>
                </div>
              </div>
            }
            {/* end code ng experience content */}

            {/* start code ng education content */}
            {activeContent === "B" && 
            <div className="text-white ">
              <div>
                <h3>My Education</h3>
                <p>Despite the pandemic, I graduated, building resilience, adaptability, and a passion for learning</p>
              </div>
              <div className='edu-card'>
                <span>2019 - 2024 </span>
                <p>4 years</p>
                <h5>Information Technology</h5>
                <ul>
                  <li>Cavite State University CCAT-Campus</li>
                </ul>
              </div>
            </div>
            }
            {/* end code ng education content */}

            {/* start code ng skills content */}
            {activeContent === "C" && 
            <div className="text-white skill-set">
              <div>
                <h3>My Skills</h3>
                <p>Equipped with skills in web development, programming, and IT solutions.</p>
              </div>

              {/* Dropdown menu */}
              <select onChange={handleSelectChange} value={skillSet}>
                <option value="A">Programming</option>
                <option value="B">Design</option>
                <option value="C">Others</option>
              </select>

              {/* Content display */}
              <div className='skills'>
                {/* start code ng programming skill set */}
                {/* unang skill set : Programming skills */}
                {skillSet === "A" && 
                <>
                  <ul>
                    <li title='HTML'><img src={Html} alt='Html' height={40} /></li>
                    <li title='CSS-3'><img src={Css} alt='CSS-3' height={40} /></li>
                    <li title='Javascript'><img src={Js} alt='JS' height={40} /></li>
                    <li title='Bootstrap'><img src={Bootstrap} alt='Bootstrap' height={40} /></li>
                    <li title='React Js'><img src={ReactJs} alt='React Js' height={40} /></li>
                  </ul>
                  <ul>
                    <li title='Laravel'><img src={Laravel} alt='Laravel' height={40} /></li>
                    <li title='Node Js'><img src={NodeJs} alt='Node Js' height={40} /></li>
                    <li title='PHP'><img src={Php} alt='PHP' height={40} /></li>
                    <li title='MySQL'><img src={MySql} alt='MySQL' height={40} /></li>
                    <li title='Mongo DB'><img src={MongoDb} alt='MongoDb' height={40} /></li>
                  </ul>
                  <ul>
                    <li title='Express JS'><img src={ExpressJs} alt='Express JS' height={40} /></li>
                  </ul>
                </>
                }
                {/* end ng unang skill set : Programming skills */}
    
                {/* pangalawang skill set : Graphic Design */}
                {skillSet === "B" && 
                <ul>
                  <li title='Adobe Photoshop'><img src={Adobe} alt='Adobe Photoshop' height={40} /></li>
                  <li title='Canva'><img src={Canva} alt='canva' height={40} /></li>
                  <li title='Figma'><img src={Figma} alt='Figma' height={40} /></li>
                </ul>
                }
                {/* end ng pangalawang skill set : Graphic Design */}

                {/* pangatlong skill set : Others */}
                {skillSet === "C" && 
                <ul>
                  <li title='Git'><img src={Git} alt='Git' height={40} /></li>
                  <li title='Github'><img src={Github} alt='Github' height={40} /></li>
                </ul>
                }
                {/* end ng pangatlong skill set : Others */}
                {/* end code ng programming skill set */}
              </div>

            </div>
            }
            {/* start code ng skills content */}

            {/* start code ng about me content */}
            {activeContent === "D" && 
            <div className="text-white ">
              <div className='about-head row mb-2'>
                <div className='col-sm-12 col-md-7'>
                  <h3>About me</h3>
                  <h6> I specialize in building top-notch, budget-friendly websites crafted for individuals and businesses. My focus is on delivering impactful, user-friendly, and visually appealing online platforms that perfectly align with your unique needs and preferences.</h6>
                </div>
                <div className='about-img col-sm-12 col-md-5'>
                  <img src={aboutme} alt=''/>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-ms-6'>
                  <ul className='about-info'>
                    <li>Name: <span>Rolly G. Octa</span></li>
                    <li>Age:  <span>26 years old</span></li>
                    <li>Nationality: <span>Filipino</span></li>
                    <li>Status: <span>Available</span></li>
                  </ul>
                </div>

                <div className='col-sm-6 col-md-6'>
                  <ul className='about-contact'>
                    <li>Phone: <span>(+639) 939 361 553</span></li>
                    <li>Email:  <span>rollyocta05@gmail.com</span></li>
                    <li>Social Media: <span>Facebook</span></li>
                    <li>Language: <span>English, Filipino</span></li>
                  </ul>
                </div>
              </div>
            </div>
            }
            {/* end code ng about me content */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
