import React from 'react'
import SlidingBanner from '../components/home/SlidingBanner'
import CategoryList from '../components/home/CategoryList'
import Monthly from '../components/home/Monthly'
import Recommended from '../components/home/Recommended'
import OrderForm from '../components/home/OrderForm'

const Home = () => {
  return (
    <div>
      <SlidingBanner/>
      <CategoryList/>
      <Monthly/>
      <Recommended/>
      <OrderForm/>
    </div>
  )
}

export default Home