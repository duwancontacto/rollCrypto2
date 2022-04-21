import { useState } from 'react'

import sobre1 from "../../assets/img/sobre.mp4"
import sobre2 from "../../assets/img/sobre2.mp4"
import sobre3 from "../../assets/img/sobre3.mp4"


import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Repartidores() {




    return (
        <div className=''>
            <h3 className='text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>TYPES</h3>
            <div className="flex  justify-center mx-auto items-center  z-[99] ">


                <div className='w-[18rem] m-5 z-[99]'>
                    <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                        <source src={sobre1}></source>
                    </video>
                    <p className=' text-[#a19b9b] p-3 text-left text-md'>Praesent quam turpis, suscipit et nulla vitae, lacinia eleifend turpis. Donec accumsan mauris sed fermentum egestas. Etiam eu placerat mi, a dapibus dolor. Nam libero .</p>
                    <button onClick={() => { }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy </button>

                </div>
                <div className='w-[18rem] m-5 mx-[80px] '>
                    <video muted autoPlay loop className="w-[24rem] rounded-lg mx-4" >
                        <source src={sobre2}></source>
                    </video>
                    <p className=' text-[#a19b9b] p-3 text-left text-md'>Praesent quam turpis, suscipit et nulla vitae, lacinia eleifend turpis. Donec accumsan mauris sed fermentum egestas. Etiam eu placerat mi, a dapibus dolor. Nam libero .</p>
                    <button onClick={() => { }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy </button>

                </div>
                <div className='w-[18rem] m-5 z-[99] '>
                    <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                        <source src={sobre3}></source>

                    </video>
                    <p className='text-[#a19b9b] p-3 text-left text-md'>Praesent quam turpis, suscipit et nulla vitae, lacinia eleifend turpis. Donec accumsan mauris sed fermentum egestas. Etiam eu placerat mi, a dapibus dolor. Nam libero .</p>
                    <button onClick={() => { }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy </button>

                </div>









            </div>
            {/*  <button onClick={() => { }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy </button> */}
        </div>
    )
}
