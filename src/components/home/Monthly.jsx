import React, { useState } from 'react'
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
import febPop from "../../assets/monthly-pop-up/february.png"
import marPop from "../../assets/monthly-pop-up/march.png"
import aprPop from "../../assets/monthly-pop-up/april.png"
import mayPop from "../../assets/monthly-pop-up/may.png"
import junPop from "../../assets/monthly-pop-up/june.png"
import julPop from "../../assets/monthly-pop-up/july.png"
import augPop from "../../assets/monthly-pop-up/august.png"
import sepPop from "../../assets/monthly-pop-up/september.png"
import octPop from "../../assets/monthly-pop-up/october.png"
import novPop from "../../assets/monthly-pop-up/november.png"
import decPop from "../../assets/monthly-pop-up/december.png"
import { FaCartArrowDown } from "react-icons/fa";
import { addMonthlyItem } from '../../utilities/cart'

const Monthly = () => {
    const [popImg, setPopImg] = useState(janPop);
    const btns = [janBtn, febBtn, marBtn, aprBtn, mayBtn, junBtn, julBtn, augBtn, sepBtn, octBtn, novBtn, decBtn];
    const pops = [janPop, febPop, marPop, aprPop, mayPop, junPop, julPop, augPop, sepPop, octPop, novPop, decPop];

    const handleBtnClick = (index) =>{
        // console.log(index, pops[index]);
        setPopImg(pops[index]);
    }

    const handleCart = (index) =>{
        console.log(index);
        addMonthlyItem(index);
    }
  return (
    <div className='mt-60'>
        <h1 className='text-5xl text-center mb-5'>MONTHLY PACKS</h1>
        <div className="monthly grid grid-cols-10 gap-4">
            <div className="left-months col-span-2 border">
                {btns.slice(0, 6).map((btn, i) => <button key={i} className='flex justify-center' onClick={()=>handleBtnClick(btns.indexOf(btn))}><img className='w-1/2' src={btn} alt="" /></button>)}
            </div>
            <div className="pop-up col-span-6 border relative">
                <img src={popImg} alt="" />
                <FaCartArrowDown className='absolute top-0 text-7xl bg-green-300 hover:bg-green-400 p-2 cursor-pointer' onClick={()=>handleCart(pops.indexOf(popImg))}/>
            </div>
            <div className="right-months col-span-2 border">
                {btns.slice(6).map((btn, i) => <button key={i} className='flex justify-center' onClick={()=>handleBtnClick(btns.indexOf(btn))}><img className='w-1/2' src={btn} alt="" /></button>)}
            </div>
        </div>
    </div>
  )
}

export default Monthly