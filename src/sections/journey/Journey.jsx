import React from 'react'
import "./journey.css"
const Journey = () => {
  return (
    <section className="journey">
    <div className="container">
         <div className="journey-wrapper">
              <div className="journey-title">
                  <h2>Our Journey</h2>
                  <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>  
                 <div className="journey-item">
                   <div className="item">
                         <h1> 200<span>+</span></h1>
                   </div>
                   <div className="item">
                       <h1> 10<span>K+</span></h1>
                  </div>
                  <div className="item">
                   <h1> 16<span>+</span></h1>
                 </div>
               </div>   
              </div>
              <div className="journey-images">
                 <img src="/about_banner.jpg" alt="not found"/>
              </div>
         </div>
    </div>
    </section>
  )
}

export default Journey