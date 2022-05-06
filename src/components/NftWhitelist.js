import React, { useState } from 'react'
import nft1 from "../assets/img/nft1copy.mp4"
import cerdo from "../assets/img/cerdoCopy.mp4"
import intwolf from "../assets/img/intwolfCopy.mp4"
import nft2 from "../assets/img/nft2copy.mp4"
import nft3 from "../assets/img/nft3Copy.mp4"

import nft1mobile from "../assets/img/nft1mobile1.gif"
import cerdomobile from "../assets/img/CerdoMobile1.gif"
import intwolfmobile from "../assets/img/intwolfMobile1.gif"
import nft2mobile from "../assets/img/nft2mobile1.gif"
import nft3mobile from "../assets/img/nft3mobile1.gif"

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function NftWhitelist() {


    const [step, setStep] = useState(0)

    const onClickStepRest = () => {

        if (step === 0) return setStep(4)
        setStep(step - 1)



    }

    const onClickStep = () => {

        if (step === 4) return setStep(0)
        setStep(step + 1)



    }

    return (
        <>
            <h3 className='text-[30px] md:text-[40px]font-bold text-[#f6bd60] mt-6 font-titulo text-center'>NFT WHITELIST</h3>
            <div className=" items-center hidden lg:flex">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[24rem] h-[25rem] overflow-hidden  m-5 z-[99] pt-[40px]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 24}rem` }}>

                        <video autoPlay loop className="w-[24rem] rounded-full" >
                            <source src={nft1}></source>
                        </video>
                        <video muted autoPlay loop className="w-[24rem] rounded-full" >
                            <source src={cerdo}></source>
                        </video>
                        <video muted autoPlay loop className="w-[24rem] rounded-full" >
                            <source src={intwolf}></source>
                        </video>

                        <video muted autoPlay loop className="w-[24rem] rounded-full" >
                            <source src={nft2}></source>
                        </video>
                        <video muted autoPlay loop className="w-[24rem] rounded-full" >
                            <source src={nft3}></source>
                        </video>





                    </div>
                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>

            <div className="flex items-center  lg:hidden ">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={40} />
                <div className="w-[17rem] h-[25rem] overflow-hidden  z-[99] pt-[80px]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 17}rem` }}>


                        <img src={nft1mobile} className="w-[17rem] rounded-full" alt='nft1mobile' />
                        <img src={cerdomobile} className="w-[17rem] rounded-full" alt='cerdomobile' />
                        <img src={intwolfmobile} className="w-[17rem] rounded-full" alt='intwolfmobile' />
                        <img src={nft2mobile} className="w-[17rem] rounded-full" alt='nft2mobile' />
                        <img src={nft3mobile} className="w-[17rem] rounded-full" alt='nft3mobile' />






                    </div>
                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={40} />



            </div>
        </>
    )
}
