import React from 'react';

const Cont1 = () => {

  return(
      <div>
     
 {/* <!-- contact section starts  --> */}
 
 <section className="contact">
 
    <h1 className="heading"> get in touch </h1>
 
    <div className="icons-container">
 
       <div className="icons">
          <i className="fas fa-clock"></i>
          <h3>opening hours :</h3>
          <p>07:00am to 09:00pm</p>
       </div>
 
       <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>phone :</h3>
          <p>+25 263 XXX XXXX</p>
          <p>+25 263 XXX XXXX</p>
       </div>
 
       <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3> email : </h3>
          {/* <!-- <p>shaikhanas@gmail.com</p> --> */}
          <p>munaAhmed212@yahoo.com</p>
       </div>
 
       <div className="icons">
          <i className="fas fa-map"></i>
          <h3>address :</h3>
          <p>Hargeisa, Somaliland </p>
       </div>
 
    </div>
 
    <div className="row">
 
       <div className="image">
          <img src="contact-img.png" alt=""/>
       </div>
 
       <form action="">
          <h3>send us a message</h3>
          <input type="text" placeholder="name" className="box"/>
          <input type="email" placeholder="email" className="box"/>
          <input type="number" placeholder="phone" className="box"/>
          <textarea name="" className="box" placeholder="message" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" className="btn"/>
       </form>
 
    </div>
 
 </section>
 
 {/* <!-- contact section ends --> */}
 
      
      
      </div>
  );
};

export default Cont1;
