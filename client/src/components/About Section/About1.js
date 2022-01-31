import React from 'react';

const About1 = () => {
  return (
  <div>

{/* <!-- about section starts  --> */}
 
 <section className="about">
 
    <div className="image">
       <img src="about-img.jpg" alt=""/>
    </div>
 
    <div className="content">
       <h3 className="about-title">we have best courses for you</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste.</p>
       <div className="icons-container">
          <div className="icons">
             <img src="about-icon-1.png" alt=""/>
             <h3>350+</h3>
             <span>courses</span>
          </div>
          <div className="icons">
             <img src="about-icon-2.png" alt=""/>
             <h3>1200+</h3>
             <span>students</span>
          </div>
          <div className="icons">
             <img src="about-icon-3.png" alt=""/>
             <h3>10+</h3>
             <span>awards</span>
          </div>
       </div>
    </div>
  
 </section>
 
 {/* <!-- about section ends --> */}
  </div>

  );
};

export default About1;
