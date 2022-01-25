import React, {useState} from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import Auth from "./auth/Auth";

const Header = () => {
  const [showNav, SetShowNav] = useState(false);
const [Account, SetAccount] = useState(false);
const [showToggle, setshowToggle] = useState(false);
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
          <div id="account-btn"
           className="fas fa-user"
           onClick={()=> SetAccount(!Account)}
           role= "button"
           onKeyDown={()=>SetAccount(!Account)}
           tabIndex={0}
          ></div>
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
     {/* <div class="buttons" >
    <span class="btn login-btn"
      onClick={()=> setshowToggle(!showToggle)}
      role= "button"
      onKeyDown={()=>setshowToggle(!showToggle)}
      tabIndex={0}
     >login</span>
     <span class="btn  register-btn" 
       onClick={()=> setshowToggle(!showToggle)}
       role= "button"
       onKeyDown={()=>setshowToggle(!showToggle)}
       tabIndex={0}
     >register</span>
</div> */}
 
<form 
className="login-form  active" 
action=""
onClick={()=> setshowToggle(!showToggle)}
role= "button"
onKeyDown={()=>setshowToggle(!showToggle)}
tabIndex={0}
>
       <h3>login now</h3>
       <input type="email" placeholder="enter your email" className="box"/>
       <input type="password" placeholder="enter your password" className="box"/>
       <div className="flex">
          <input type="checkbox" name="" id="remember-me"/>
          <label for="remember-me">remember me</label>
          <a href="#">forgot password?</a>
       </div>
       <input type="submit" value="login now" className="btn"

      />
    </form>
 
    <form className="register-form  active" action=""
      onClick={()=> setshowToggle(!showToggle)}
      role= "button"
      onKeyDown={()=>setshowToggle(!showToggle)}
      tabIndex={0}>
       <h3>register now</h3>
       <input type="email" placeholder="enter your email" className="box"/>
       <input type="password" placeholder="enter your password" className="box"/>
       <input type="password" placeholder="confirm your password" className="box"/>
       <input type="submit" value="register now" className="btn"

      />
    </form>
 

      </div>

 
    </div>
  );
};

export default Header;
