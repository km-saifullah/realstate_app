import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact_part-one">
        <div className="container">
          <div className="contact_one-wrapper">
            <h1 className="head">Get in Touch with Estatein</h1>
            <p className="pera">
              Welcome to Estatein's Contact Us page. We're here to assist you
              with any inquiries, requests, or feedback you may have. Whether
              you're looking to buy or sell a property, explore investment
              opportunities, or simply want to connect, we're just a message
              away. Reach out to us, and let's start a conversation.
            </p>
          </div>
        </div>
      </section>
      <section id="contact_part-two">
        <div className="contact_two-wrapper">
          <div className="card_box">
            <div className="img_box">
              <img src="./images/c-icon01.png" alt="" />
            </div>
            <h4 className="sub_head">info@estatein.com</h4>
          </div>
          <div className="card_box">
            <div className="img_box">
              <img src="./images/c-icon02.png" alt="" />
            </div>
            <h4 className="sub_head">+1 (123) 456-7890</h4>
          </div>
          <div className="card_box">
            <div className="img_box">
              <img src="./images/c-icon03.png" alt="" />
            </div>
            <h4 className="sub_head">Main Headquarters</h4>
          </div>
          <div className="card_box">
            <div className="img_box">
              <img src="./images/c-icon04.png" alt="" />
            </div>
            <h4 className="sub_head">
              <span>Instagram</span> <span>LinkedIn</span> <span>Facebook</span>
            </h4>
          </div>
        </div>
      </section>

      <section id="contact_part-three">
        <div className="container">
          <div className="contact_three-wrapper">
            <div className="top_box-01">
              <h1 className="head">Let's Connect</h1>
              <p className="pera">
                We're excited to connect with you and learn more about your real
                estate goals. Use the form below to get in touch with Estatein.
                Whether you're a prospective client, partner, or simply curious
                about our services, we're here to answer your questions and
                provide the assistance you need.
              </p>
            </div>
            <div className="top_box-02">
              <div>
                <form action="">
                  <input type="text" placeholder="Frist Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <br />
                  <input type="number" placeholder="Phone" />
                  <input type="submit" placeholder="Inquiry Type" />
                  <input
                    type="submit"
                    placeholder="How Did You Hear About Us?"
                  />
                  <br />
                  <textarea name="message" id="" cols="30" rows="10"></textarea>
                  <br />
                  <input type="text" />
                  <button className="btn">Send Your Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact_part-four">
        <div className="container">
          <div className="contact_four-wrapper">
            <div className="top_box-01">
              <h1 className="head">Discover Our Office Locations</h1>
              <p className="pera">
                Estatein is here to serve you across multiple locations. Whether
                you're looking to meet our team, discuss real estate
                opportunities, or simply drop by for a chat, we have offices
                conveniently located to serve your needs. Explore the categories
                below to find the Estatein office nearest to you
              </p>
            </div>
            <div className="top_box-02"></div>
          </div>
        </div>
      </section>

      <section id="contact_part-five">
        <div className="container">
          <div className="contact_five-wrapper">
            <div className="img_box-02">
              <div>
                <img src="./images/Image1.png" alt="" />
              </div>
              <div>
                <img src="./images/Image2.png" alt="" />
              </div>
            </div>
            <div className="img_box-02">
              <div>
                <img src="./images/Image3.png" alt="" />
              </div>
              <div>
                <img src="./images/Image4.png" alt="" />
              </div>
              <div>
                <img src="./images/Image5.png" alt="" />
              </div>
            </div>
            <div className="img_box-02">
              <div>
                <h1 className="head">Explore Estatein's World</h1>
                <p className="pera">
                  Step inside the world of Estatein, where professionalism meets
                  warmth, and expertise meets passion. Our gallery offers a
                  glimpse into our team and workspaces, inviting you to get to
                  know us better.
                </p>
              </div>
              <div>
                <img src="./images/Image6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact_part-six">
        <div className="container">
          <div className="contact_six-wrapper">
            <div className="left_part">
              <h1 className="head">Start Your Real Estate Journey Today</h1>
              <p className="pera">
                Welcome to Estatein, where your real estate aspirations meet
                expert guidance. Explore our comprehensive range of services,
                each designed to cater to your unique needs and dreams.
              </p>
            </div>
            <div className="right_part">
              <button className="btn">Explore Properties</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
