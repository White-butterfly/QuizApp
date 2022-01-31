
import './App.css';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

// Header 
import Header from './components/Home Section/headerUser/Header';
import Home from './components/Home Section/Home';
import Categories from './components/Category Section/Categories';
import Contact from './components/Contact Section/Contact';
import About from './components/About Section/About';
import Cat1 from './components/Category Section/Cat1';



// login 
import PrivateRoute from './components/Authentification/routing/PrivateRoute';
import LoginScreen from './components/Authentification/screens/LoginScreen';
import RegisterScreen from './components/Authentification/screens/RegisterScreen';
import ForgotPasswordScreen from './components/Authentification/screens/ForgotPasswordScreen';
import PrivateScreen from './components/Authentification/screens/PrivateScreen';
import ResetPasswordScreen from './components/Authentification/screens/ResetPasswordScreen';

function App() {

  return (
<>
  <BrowserRouter>
  <Header/>
  
<Routes>

 <Route path="/Home" element={<Home />} /> 
 <Route path="/Categories" element={<Categories />} /> 
 <Route path="/About" element={<About />} /> 
 <Route path="/Contact" element={<Contact/>} /> 
 <Route path="/Cat1" element={<Cat1/>}/>

{/* login  */}
 {/* <Route  path = "/" element= {<PrivateRoute/>}/> */}
 {/* <Route path="/" element={ <PrivateRoute> <PrivateScreen /> </PrivateRoute> } /> */}
          <Route  path="/login" element={<LoginScreen/>} />
          <Route  path="/register" element={<RegisterScreen/>} />
          <Route path="/forgotpassword" element={<ForgotPasswordScreen/>} />
          <Route  path="/passwordreset/:resetToken" element={<ResetPasswordScreen/>} />
       
</Routes>
    
  </BrowserRouter>
   </>
  );
}

export default App;
