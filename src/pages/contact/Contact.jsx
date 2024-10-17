import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <>
      <div className='contact_wrap'>
        <section id='contact_part_one'>
          <div className='part_one_wrapper container'>
              <h3>
                  Get in Touch with Estatein
              </h3>
              <p>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or
              feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
          </div>
        </section>
        <section id='contact_part_two'>
          <div className='box-size'>
            <img src="/mail.png" alt="not found"/>
            <p>info@estatein.com</p>
            <img src='/arrow.png' className='arrow'/>
          </div>
          <div className='box-size'>
            <img src="/call.png" alt="not found"/>
            <p>+1 (123) 456-7890</p>
            <img src='/arrow.png' className='arrow'/>
          </div>
          <div className='box-size'>
            <img src="/map.png" alt="not found"/>
            <p>Main Headquarters</p>
            <img src='/arrow.png' className='arrow'/>
          </div>
          <div className='box-size'>
            <img src="/instra.png" alt="not found"/>
            <p>Instagram LinkedIn Facebook</p>
            <img src='/arrow.png' className='arrow'/>
          </div>
        </section>   

        <section id='contact_part_3'>
          <div className='three-wrap container'>
            <h3>Let's Connect</h3>
            <p>We're excited to connect with you and learn more about your 
              real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
          </div>
        </section>


      </div>
      
      </>
  )
}

export default Contact

