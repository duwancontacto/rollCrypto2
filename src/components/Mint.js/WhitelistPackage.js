import React, { useEffect, useState } from 'react'

import sobre1 from "../../assets/img/sobre.mp4"
import sobre2 from "../../assets/img/sobre2.mp4"
import sobre3 from "../../assets/img/sobre3.mp4"


import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Repartidores() {


    const [step, setStep] = useState(0)

    const onClickStepRest = () => {
        if (step === 0) return setStep(2)
        setStep(step - 1)
    }

    const onClickStep = () => {
        if (step === 2) return setStep(0)
        setStep(step + 1)
    }


    return (
        <>
            <h3 className='text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>TYPES</h3>
            <div className="flex justify-center mx-auto items-center">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[18rem] h-[15rem] overflow-hidden  m-5 z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 18}rem` }}>

                        <div className={`flex`}>

                            <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                                <source src={sobre1}></source>
                            </video>
                            <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                                <source src={sobre2}></source>
                            </video>
                            <video muted autoPlay loop className="w-[24rem] rounded-lg" >
                                <source src={sobre3}></source>
                            </video>
                        </div>



                    </div>
                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>
            <button onClick={() => { }} className="mx-auto p-2  w-[15rem] bg-[#149fd6] hover:scale-110 transition-all duration-200 rounded-xl text-white text-xl"> Buy </button>
        </>
    )
}
