import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import {ArrowDownToLine, Github, Linkedin, Facebook} from 'lucide-react';
import rollyImage from '../../../images/rolly-grad.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  const titles = ["Web Developer", "Programmer", "Graphic Designer"];
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentTitle.substring(0, charIndex));

      if (!isDeleting && charIndex < currentTitle.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className='home'>
      
      <div class="container">
        <div class="row justify-content-md-center">

          <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <div className='banner-left'>
              
              <div> 
                <h2>Hello!</h2>
                <h4 className='fw-bold mb-3'>
                  <span className='text-white'>I am a </span><span style={{ color:'#2dfa9d' }}>{text}|</span>
                </h4>
                <h1>Rolly Octa</h1>
                <p>Turning ideas into interactive realities.</p>
              </div>      

              <div>
                <a href="/public/files/RollyOcta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-success me-2"
                title="Download CV"
                download="RollyOcta.pdf">

                  Download CV <ArrowDownToLine size={16} />

                </a>
                {/* <button className='btn btn-sm btn-outline-success me-2' title='Github'><Github size={16} /></button>
                <button className='btn btn-sm btn-outline-success me-2' title='Linkedin'><Linkedin size={16} /></button>
                <button className='btn btn-sm btn-outline-success' title='Facbook'><Facebook size={16} /></button> */}
              </div>

            </div>

          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center mb-5">

            <div className='box'>
              <div className='content'>
                <img src={rollyImage} alt="Description" />
                <h2>Looking for a coder? <br/> <span>Let’s work together!</span></h2>
                <Link to='/contact' className='btn btn-sm btn-outline-success' >Hire me</Link>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Home
