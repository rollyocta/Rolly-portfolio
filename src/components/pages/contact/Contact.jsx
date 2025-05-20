import React from 'react'
import {Phone, Mail, Facebook} from 'lucide-react'
import Map from './Map.jsx'

const Contact = () => {
  return (
    <section className='contact'>
      
      <div class="container">
        <div class="row justify-content-md-center">

          <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <Map />
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <div className='contact-info'>
              <div className='contact-box mb-5'> 
                <span><Phone color="#2dfa9d" /></span>
                <div>
                  <h6>Phone</h6>
                  <h6>(+639)&nbsp;&nbsp;939&nbsp;&nbsp;361&nbsp;&nbsp;553</h6>
                </div>
              </div>

              <div className='contact-box mb-5'>
                <span><Mail color="#2dfa9d" /></span>
                <div>
                  <h6>Email</h6>
                  <h6>rollyocta05@gmail.com</h6>
                </div>
              </div>

              <div className='contact-box'>
                <span><Facebook color="#2dfa9d" /></span>
                <div>
                  <h6>Facebook</h6>
                  <h6>Rolly G. Octa</h6>
                </div>
              </div>


            </div>

            
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
