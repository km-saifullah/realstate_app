
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
              <p>Welcome to Estateins Contact Us page. Were here to assist you with any inquiries, requests, or
              feedback you may have. Whether youre looking to buy or sell a property, explore investment opportunities,
               or simply want to connect, were just a message away. Reach out to us, and lets start a conversation.</p>
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
            <img src='/star.png'/>
            <h3>Lets Connect</h3>
            <p> Were excited to connect with you and learn more about your 
              real estate goals. Use the form below to get in touch with Estatein. Whether youre a
               prospective client, partner, or simply curious about our services, were here to answer your questions and provide
               the assistance you need.</p>
          </div>

          <div className="form_box container">
            <div className="form-wrap ">
              <div className="form_wrapper">
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>

      
              
              </div>

              <div className="form_wrapper">
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>

      
              
              </div>

              <div className="form_wrapper">
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>
                <div className="form">
                  <label>First Name</label>
                  <input type="text"  name="firstname" placeholder="Your name.."/>
                </div>

      
              
              </div>

            </div>
              <div className="form massagebox">
                <label>First Name</label>
                <input type="text"  name="firstname" placeholder="Your name.."/>
              </div>
          </div>
          

          
        </section> 


      </div>
      
      </>
  )
}

export default Contact

