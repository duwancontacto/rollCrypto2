import React from 'react'

import fotoNFT1 from "../../assets/img/fotoNFT1.jpg"
import fotoNFT2 from "../../assets/img/FotoNFT2.jpg"
import fotoNFT3 from "../../assets/img/FotoNFT3.jpg"

import Fondo from "../../assets/img/FondoRool.PNG"

export default function Mint() {
    return (
        <div className=' h-[99vh] relative z-[100]   fondo-boton'>

            {/*   <img src={Fondo} className='w-[100vw] h-[99vh] z-[50] absolute left-0 top-0' /> */}
            <div className='relative z-[200] top-[10rem] flex justify-around'>
                <div>
                    <img src={fotoNFT1} alt="fotoNFT1" className='w-[16rem] h-[16rem]' />
                    <div className=' flex justify-center items-center '><button className=' bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl'>Mint</button></div>

                </div>
                <div><img src={fotoNFT2} alt="fotoNFT2" className='w-[16rem] h-[16rem]' />
                    <div className=' flex justify-center items-center'><button className='bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl'>Mint</button></div>
                </div>

                <div><img src={fotoNFT3} alt="fotoNFT3" className='w-[16rem] h-[16rem]' />
                    <div className=' flex justify-center items-center'><button className='bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl'>Mint</button></div>
                </div>


            </div>
        </div>
    )
} 
