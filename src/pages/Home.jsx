import React, { useState } from 'react'
import SlidingBanner from '../components/home/SlidingBanner'
import CategoryList from '../components/home/CategoryList'
import Monthly from '../components/home/Monthly'
import Recommended from '../components/home/Recommended'
import OrderForm from '../components/home/OrderForm'
import { initializeCart } from '../utilities/cart'

const Home = () => {
  const[isChange, setIsChange] = useState(false);
  initializeCart();
  return (
    <div>
      <SlidingBanner/>
      {/* <CategoryList/> */}
      <Monthly setIsChange={setIsChange}/>
      {/* <Recommended/> */}
      <OrderForm isChange={isChange}/>
    </div>
  )
}

export default Home

// sarwarjahin
// Iw840XrlCiU7BPxW