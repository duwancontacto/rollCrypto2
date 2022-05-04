import { useState } from 'react'

import sobre1 from "../../assets/img/sobre.mp4"
import sobre2 from "../../assets/img/sobre2.mp4"
import sobre3 from "../../assets/img/sobre3.mp4"


import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Repartidores({ priceCards, buyNft, loading }) {


    if (!priceCards) return <h3 className='text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>LOADING...</h3>

    return (
        <div className=''>
            {loading ?
                <h3 className='text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>LOADING...</h3>
                : <>
                    <h3 className='mt-20 md:mt-10 text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>TYPES</h3>
                    <div className="flex flex-wrap justify-center mx-auto items-center  z-[99] ">


                        <div className='w-[18rem] m-5 z-[99]'>
                            <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                                <source src={sobre1}></source>
                            </video>
                            <h3 style={{ textShadow: "0px 0px 10px #fff" }} className="text-white  font-bold text-3xl mt-5">Common</h3>
                            <p className=' text-[#a19b9b] p-3 text-left text-md  py-6 font-bold'>Access to the pre-sale of the token for a value of 1 BNB</p>
                            <button onClick={() => { buyNft(0) }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy {priceCards && `for ${priceCards[0]} BNB`} </button>

                        </div>
                        <div className='w-[18rem] m-5 mx-[80px] '>
                            <video muted autoPlay loop className="w-[24rem] rounded-lg mx-4" >
                                <source src={sobre2}></source>
                            </video>
                            <h3 style={{ textShadow: "0px 0px 10px #fff" }} className="text-white  font-bold text-3xl mt-5 text-shadow">Epic</h3>
                            <p className=' text-[#a19b9b] p-3 text-left text-md py-6 font-bold'>Access to the pre-sale of the token for a value of 2 BNB</p>
                            <button onClick={() => { buyNft(1) }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy {priceCards && `for ${priceCards[1]} BNB`} </button>

                        </div>
                        <div className='w-[18rem] m-5 z-[99] '>
                            <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                                <source src={sobre3}></source>

                            </video>
                            <h3 style={{ textShadow: "0px 0px 10px #fff" }} className="text-white  font-bold text-3xl mt-5">Legendary</h3>
                            <p className='text-[#a19b9b] p-3 text-left text-md  py-6 font-bold'>Access to the pre-sale of the token for a value of 3 BNB</p>
                            <button onClick={() => { buyNft(2) }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy {priceCards && `for ${priceCards[2]} BNB`} </button>

                        </div>

                    </div>
                </>}

        </div>
    )
}
