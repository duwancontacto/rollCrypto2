import React, { useState, useEffect } from 'react'
import store1 from "../assets/img/store1.webp"

import store2 from "../assets/img/store2.webp"
import store3 from "../assets/img/store3.webp"
import store4 from "../assets/img/store4.webp"

import store1a from "../assets/img/store1.1.webp"
import store2a from "../assets/img/store2.1.webp"
import store3a from "../assets/img/store3.1.webp"
import store4a from "../assets/img/store4.1.webp"



import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Store() {


    const [step, setStep] = useState(0)
    const [position, setPosition] = useState(1)

    const onClickStepRest = () => {

        if (step === 0) return setStep(3)
        setStep(step - 1)



    }

    useEffect(() => {

        let tempPosition = 1
        let idInterval = setInterval(() => {
            if (tempPosition === 2) tempPosition = 1
            else tempPosition = tempPosition + 1

            setPosition(tempPosition)

        }, 1000)

        return () => { clearInterval(idInterval) }

    }, [])

    const onClickStep = () => {

        if (step === 3) return setStep(0)
        setStep(step + 1)



    }

    return (
        <>
            <h3 className='text-[30px] md:text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>STORES</h3>
            <div className="items-center  hidden lg:flex">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[23rem] h-[25rem] overflow-hidden flex items-center justify-center  m-5 z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 24}rem` }}>

                        <div className={`${position === 1 ? "flex" : "hidden"}`}>

                            <img src={store1} className="w-[24rem] mx-2 rounded-full" alt='store1' />
                            <img src={store2} className="w-[24rem] mx-2 rounded-full" alt='store2' />
                            <img src={store3} className="w-[24rem] mx-2 rounded-full" alt='store3' />
                            <img src={store4} className="w-[24rem] mx-2 rounded-full" alt='store4' />

                        </div>

                        <div className={`${position === 2 ? "flex" : "hidden"}`}>

                            <img src={store1a} className="w-[24rem] mx-2 rounded-full" alt='store1a' />
                            <img src={store2a} className="w-[24rem] mx-2 rounded-full" alt='store2a' />
                            <img src={store3a} className="w-[24rem] mx-2 rounded-full" alt='store3a' />
                            <img src={store4a} className="w-[24rem] mx-2 rounded-full" alt='store4a' />



                        </div>
                    </div>

                    <div className="absolute bottom-[-6px] text-white text-center text-3xl left-0 right-0 mx-auto font-bold font-titulo ">
                        LVL {step + 1}
                    </div>

                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>

            <div className="flex items-center lg:hidden">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={40} />
                <div className="w-[18rem] h-[25rem] overflow-hidden flex items-center justify-center  z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 19}rem` }}>

                        <div className={`${position === 1 ? "flex" : "hidden"}`}>

                            <img src={store1} className="w-[19rem] mx-2 rounded-full" alt='store1' />
                            <img src={store2} className="w-[19rem] mx-2 rounded-full" alt='store2' />
                            <img src={store3} className="w-[19rem] mx-2 rounded-full" alt='store3' />
                            <img src={store4} className="w-[19rem] mx-2 rounded-full" alt='store4' />

                        </div>

                        <div className={`${position === 2 ? "flex" : "hidden"}`}>

                            <img src={store1a} className="w-[19rem] mx-2 rounded-full" alt='store1a' />
                            <img src={store2a} className="w-[19rem] mx-2 rounded-full" alt='store2a' />
                            <img src={store3a} className="w-[19rem] mx-2 rounded-full" alt='store3a' />
                            <img src={store4a} className="w-[19rem] mx-2 rounded-full" alt='store4a' />



                        </div>
                    </div>

                    <div className="absolute bottom-[-6px] text-white text-center text-3xl left-0 right-0 mx-auto font-bold font-titulo ">
                        LVL {step + 1}
                    </div>

                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={40} />



            </div>
        </>
    )
}
