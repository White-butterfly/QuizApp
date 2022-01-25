import React from 'react'

const Section1 = () => {
    return (
        <div>

{/* <!-- home section starts  --> */}

<section className="home">

    <div className="swiper home-slider">
       
       <div className="swiper-wrapper">
 
          <section className="swiper-slide slide" style={{backgroundImage: 'url(./home-slide-3.jpg) '}} >
           {/*  style={{backgroundImage: 'url(./home-slide-2.jpg) no-repeat;'}} */}
             <div className="content">
                <h3>the best practise for you Licence find here!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                <a href="#" className="btn">get started</a>
             </div>
          </section>
           
          <section class="swiper-slide slide"  style={{backgroundImage: 'url(./home-slide-3.jpg) '}}>
             <div class="content">
                <h3>the best practise for you Licence find here!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                <a href="#" class="btn">get started</a>
             </div>
          </section>
 
          <section class="swiper-slide slide"  style={{backgroundImage: 'url(./home-slide-1.jpg) '}}>
             <div class="content">
                <h3>the best practise for you Licence find here!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                <a href="#" class="btn">get started</a>
             </div>
          </section>
 
       </div>
 
       <div className="swiper-pagination"></div>
 
    </div>
    </section>
    
  {/* <!-- home section ends --> */}
        </div>
    )
}

export default Section1
