
import React, { useState } from 'react';
import bgPhoto from "./assets/lanch.jpg"
import Header from './components/Header';
import HowItWork from './components/HowItWork';
import Review from './components/Review';
import Footer from './components/Footer';
export const App=()=> {
return (
  <div>
<Header/>
<HowItWork/>
<Review/>
<Footer/>
  </div>

)
}


