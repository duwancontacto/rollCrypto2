import React from 'react'
import apeswap from "../assets/img/apeswap.png"
import binance from "../assets/img/binance.png"
import Chainlink from "../assets/img/chainlink.png"
import unity from "../assets/img/unity.png"
import pancakeswap from "../assets/img/pancakeswap.png"
import { MdCopyright } from 'react-icons/md';

export default function Footer({ bottom }) {
    return (
        <div className={`w-[100%] h-[60px] absolute left-0  ${bottom || "bottom-0"}  flex justify-between items-center`}>
            <div className=' mx-6 hidden md:flex '>

                <div className='flex items-center w-[6rem] cursor-pointer '><img src={apeswap} alt="apeswap" /></div>
                <div className='flex  items-center w-[5rem] mx-3  cursor-pointer'><img src={binance} alt="binance" /></div>
                <div className='flex  items-center w-[5rem]  cursor-pointer'><img src={Chainlink} alt="chainlink" /></div>
                <div className='flex  items-center w-[4rem] mx-3  cursor-pointer'><img src={unity} alt="uniy" /></div>
                <div className='flex  items-center w-[6rem]  cursor-pointer '><img src={pancakeswap} alt="pancakeswap" /></div>
            </div>


            <div className='flex justify-center items-center mx-6'>
                <MdCopyright />
                <p className='text-md text-white font-bold ml-2'>2022 , Good Roll Crypto.All Rights Reserved</p>
            </div>
        </div>
    )
}
