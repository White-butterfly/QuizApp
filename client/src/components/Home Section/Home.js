import React from 'react'

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Footer from '../Footer';
import PopularCategories from './PopularCategories';
import Section1 from './Section1';


const Home = () => {
   Swiper.use([Navigation, Pagination]);
    return (
        <div>

 
<Section1/>

 <PopularCategories/>

 <Footer/>



        </div>
    )
}

export default Home
