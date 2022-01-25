
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

</Routes>
    
  </BrowserRouter>
   </>
  );
}

export default App;
