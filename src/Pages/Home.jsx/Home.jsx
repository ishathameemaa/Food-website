import React from 'react';
import Welcome from '../Welcome/Welcome'
import Partner from '../partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Ambiance from '../Ambiance/Ambiance'
import Dekivery from '../Delivery/Dekivery'



function Home() {
  return (
    <>
    <Welcome/>
     <Partner/>
      <Booking />
      <Dishes />
      <Ambiance />
      <Dekivery/>
    </>
  );
}

export default Home;
