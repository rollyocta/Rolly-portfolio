import React from 'react'
import {Chrome, Globe, PenTool, Palette} from 'lucide-react'

const Services = () => {
  return (
    <section className='services'>
      
      <div class="container pt-3">

        <div class="row justify-content-md-center">

          <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <div className='services-column'>
              <div className='d-flex justify-content-between mb-2'>
                <h2 className='text-stroke'>01</h2>
                <Chrome color='#2dfa9d' size={45}/>
              </div>
              <h3>Web Development</h3>
              <p>I have foundational knowledge in building and managing websites using modern tools and frameworks like HTML, CSS, JavaScript, and React.</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center mb-5">
            <div className='services-column'>
              <div className='d-flex justify-content-between mb-2'>
                <h2 className='text-stroke'>02</h2>
                <Globe color='#2dfa9d' size={45}/>
              </div>
              <h3>Web Deployment</h3>
              <p> I understand the basics of hosting and publishing websites online using platforms like Hostinger</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center mb-5">
            <div className='services-column'>
              <div className='d-flex justify-content-between mb-2'>
                <h2 className='text-stroke'>03</h2>
                <Palette color='#2dfa9d' size={45} />
              </div>
              <h3>Logo Design</h3>
              <p> I can create simple and effective brand logos that align with the identity and message of a business or project.</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center mb-5">
            <div className='services-column'>
              <div className='d-flex justify-content-between mb-2'>
                <h2 className='text-stroke'>04</h2>
                <PenTool color='#2dfa9d' size={45}/>
              </div>
              <h3>Graphic Design</h3>
              <p> I work on basic visual content such as social media posts, posters, and layouts using tools like Canva or Adobe Photoshop.</p>
            </div>
          </div>

        </div>

      </div>

    </section>


    
  )
}

export default Services
