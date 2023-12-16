import React from 'react'
import './inquire.css'
import CommonBtn from '../../components/commonBtn/CommonBtn'

const Inquire = () => {
  return (
    <section className='inquire_seaVila'>
        <div className="container">
            <div className="inquire_seaVilaWrapper">
                <div className="inquire_disc">
                    <h2>
                    Inquire About Seaside Serenity Villa
                    </h2>
                    <p>
                    Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
                    </p>
                </div>
                <div className="inquire_forum">
                    <form className='inquire-submit'>
                        <div className="personal_info">
                            <div className="info_form">
                                <label htmlFor="firstName">first name</label>
                                <input type="text" placeholder='last name' name='firstName'/>
                            </div>
                            <div className="info_form">
                                <label htmlFor="lastName">last name</label>
                                <input type="text" placeholder='Last name' name='lastName'/>
                            </div>
                            <div className="info_form">
                                <label htmlFor="email">email</label>
                                <input type="text" placeholder='email@mail.com' name='email'/>
                            </div>
                            <div className="info_form">
                                <label htmlFor="phone">first name</label>
                                <input type="text" placeholder='phone' name='phone'/>
                            </div>
                        </div>
                        <div className="property_massage">
                            <div className="property_location">
                                <label htmlFor="propertyName">selected property</label>
                                <input type="text" placeholder='seaside serenity villa, california' name='propertyName'/>
                            </div>
                            <div className="massage">
                                <label htmlFor="massageDisc">massage</label>
                                <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="inquire_condition">
                            <div className="input_conditionCheck">
                                <input type="radio" name="submitCondition" id="submitCondition" />
                                <label htmlFor="submitCondition">I agree with terms and conditions</label>
                            </div>
                            <CommonBtn text="Send your Massage"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inquire
