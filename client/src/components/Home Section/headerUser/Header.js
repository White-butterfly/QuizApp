import React, {useState} from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";  
// import "slick-carousel/slick/slick-theme.css";  
// import Slider from "react-slick";
import Auth from "./auth/Auth";

const Header = () => {
  const [showNav, SetShowNav] = useState(false);
const [Account, SetAccount] = useState(false);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-lightbulb">Buugga </i> Liisanka 
        </a>
        <nav className={!showNav ? ' active navbar' : 'navbar'}>
          <div id="close-navbar" className="fas fa-times"
            onClick={()=> SetShowNav(!showNav)}
            role= "button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}></div> 
          {/* fas fa-times waa ka close ka ah  */}
          <Link to={"/Home"}
            onClick={()=> SetShowNav(!showNav)}
            role= "button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}>
            <a href=""> Home</a>
          </Link>
          <Link to={"/Categories"}
            onClick={()=> SetShowNav(!showNav)}
            role= "button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}>
            {" "}
            <a href="">Categories</a>
          </Link>
          <Link to={"/About"}
            onClick={()=> SetShowNav(!showNav)}
            role= "button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}>
            <a href="">About</a>
          </Link>
          <Link to={"/Contact"}
            onClick={()=> SetShowNav(!showNav)}
            role= "button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}>
            <a href="">Contact</a>
          </Link>
        </nav>

        <div className="icons">
        
          {/* fas fa-user waa profile ka qofka  */}
          <div id="menu-btn" className="fas fa-bars"
             onClick={()=> SetShowNav(!showNav)}
             role= "button"
             onKeyDown={()=>SetShowNav(!showNav)}
             tabIndex={0}></div>
          {/* fas fa-bars waa humburger ka  */}
        </div>
      </header>

      {/* <!-- account form section starts  --> */}
      <div className=
      {!Account ? '  account-form  active buttons' : ' account-form  '}>
        {/* ,  !showToggle? ' buttons register-btn' : 'register-btn' */}
        <div id="close-form" className="fas fa-times" 
             onClick={()=> SetAccount(!Account)}
             role= "button"
             onKeyDown={()=>SetAccount(!Account)}
             tabIndex={0}
        ></div>

 
 

      </div>

 
    </div>
  );
};

export default Header;
