import React from 'react'
import janBtn from "../../assets/months-logo/january.jpg"
import febBtn from "../../assets/months-logo/february.jpg"
import marBtn from "../../assets/months-logo/march.jpg"
import aprBtn from "../../assets/months-logo/april.jpg"
import mayBtn from "../../assets/months-logo/may.jpg"
import junBtn from "../../assets/months-logo/june.jpg"
import julBtn from "../../assets/months-logo/july.jpg"
import augBtn from "../../assets/months-logo/august.jpg"
import sepBtn from "../../assets/months-logo/september.jpg"
import octBtn from "../../assets/months-logo/october.jpg"
import novBtn from "../../assets/months-logo/november.jpg"
import decBtn from "../../assets/months-logo/december.jpg"
import janPop from "../../assets/monthly-pop-up/january.png"

const Monthly = () => {
  return (
    <div className='mt-60'>
        <h1 className='text-5xl text-center mb-5'>MONTHLY PACKS</h1>
        <div className="monthly grid grid-cols-10 gap-4">
            <div className="left-months col-span-2 border">
                <button className='flex justify-center'><img className='w-1/2' src={janBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={febBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={marBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={aprBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={mayBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={junBtn} alt="" /></button>
            </div>
            <div className="pop-up col-span-6 border">
                <img src={janPop} alt="" />
            </div>
            <div className="right-months col-span-2 border">
                <button className='flex justify-center'><img className='w-1/2' src={julBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={augBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={sepBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={octBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={novBtn} alt="" /></button>
                <button className='flex justify-center'><img className='w-1/2' src={decBtn} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default Monthly