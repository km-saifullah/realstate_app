
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

        <section id="conatct_part_4">
          <div className='three-wrap container'>
            
              <img src='/star.png'/>
              <h3>Discover Our Office Locations</h3>
              <p>Estatein is here to serve you across multiple locations. Whether youre looking to meet our team, discuss 
                real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs.
                 Explore the categories below to find the Estatein office nearest to you.</p>
          </div>
          <div className="container contact_btn_wrap">
            <button className="contact_btn"> All</button>
            <button className="contact_btn"> All</button>
            <button className="contact_btn"> All</button>
          </div>

          <div className="location_box_wrap container">
            <div className="location_box">
             <p className="main">Main Headquarters</p>
              <h3>123 Estatein Plaza, City Center, Metropolis</h3>
              <p className="our">Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our 
                core team of experts operates, driving the excellence and innovation that define us.</p>

                <div>
                  <div className="location_btn">
                    <button>info@estatein.com</button>
                    <button>+1 (123) 456-7890</button>
                    <button>Metropolis</button>
                  </div>
                </div>
                <button className="get_btn">Get Direction</button>
            </div>
            
            <div className="location_box">
             <p className="main">Regional Offices</p>
              <h3>456 Urban Avenue, Downtown District, Metropolis</h3>
              <p className="our">Estatein's presence extends to multiple regions, each with its own dynamic real 
                estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>

                <div>
                  <div className="location_btn">
                    <button>info@estatein.com</button>
                    <button>+1 (123) 456-7890</button>
                    <button>Metropolis</button>
                  </div>
                </div>
                <button className="get_btn">Get Direction</button>
            </div>
          </div>
        </section>


      </div>
      
      </>
  )
}

export default Contact

