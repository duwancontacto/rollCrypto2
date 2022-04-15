import React, { useState } from 'react'
import nft1 from "../assets/img/nft1.mp4"
import cerdo from "../assets/img/cerdo.mp4"
import intwolf from "../assets/img/intwolf.mp4"
import nft2 from "../assets/img/nft2.mp4"
import nft3 from "../assets/img/nft3.mp4"

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
            <h3 className='text-[40px] font-bold mb-4 text-[#f6bd60] mt-6 font-titulo text-center'>NFT WHITELIST</h3>
            <div className="flex items-center">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[24rem] h-[25rem] overflow-hidden  m-5 z-[99] pt-[40px]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 24}rem` }}>

                        <video muted autoPlay loop className="w-[24rem] rounded-full" >
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
        </>
    )
}
