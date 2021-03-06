import React, { useEffect, useState } from 'react'

import encargado1 from "../assets/img/1.1.webp"
import encargado2 from "../assets/img/1.2.webp"
import encargado3 from "../assets/img/1.webp"
import encargado4 from "../assets/img/1.3.webp"
import encargado5 from "../assets/img/1.4.webp"


import encargado1a from "../assets/img/2.1.webp"
import encargado2a from "../assets/img/2.2.webp"
import encargado3a from "../assets/img/2.webp"
import encargado4a from "../assets/img/2.3.webp"
import encargado5a from "../assets/img/2.4.webp"

import encargado1b from "../assets/img/3.1.webp"
import encargado2b from "../assets/img/3.2.webp"
import encargado3b from "../assets/img/3.webp"
import encargado4b from "../assets/img/3.3.webp"
import encargado5b from "../assets/img/3.4.webp"

import encargado1c from "../assets/img/4.1.webp"
import encargado2c from "../assets/img/4.2.webp"
import encargado3c from "../assets/img/4.webp"
import encargado4c from "../assets/img/4.3.webp"
import encargado5c from "../assets/img/4.4.webp"




import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"



export default function Managers() {


    const [step, setStep] = useState(0)
    const [position, setPosition] = useState(1)

    const onClickStepRest = () => {

        if (step === 0) return setStep(4)
        setStep(step - 1)



    }

    useEffect(() => {

        let tempPosition = 1
        let idInterval = setInterval(() => {
            if (tempPosition === 4) tempPosition = 1
            else tempPosition = tempPosition + 1

            setPosition(tempPosition)

        }, 1000)

        return () => { clearInterval(idInterval) }

    }, [])

    const onClickStep = () => {

        if (step === 4) return setStep(0)
        setStep(step + 1)



    }
    return (
        <>
            <h3 className='text-[30px] md:text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>MANAGERS</h3>
            <div className=" items-center hidden  lg:flex">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[18rem] h-[25rem] overflow-hidden  m-5 z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 18}rem` }}>

                        <div className={`${position === 1 ? "flex" : "hidden"}`}>

                            <img src={encargado1} className="w-[17rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado2} className="w-[17rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado3} className="w-[17rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado4} className="w-[17rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado5} className="w-[17rem] mx-2 rounded-full" alt='encargado' />

                        </div>
                        <div className={`${position === 2 ? "flex" : "hidden"}`}>

                            <img src={encargado1b} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado2b} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado3b} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado4b} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado5b} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />



                        </div>

                        <div className={`${position === 3 ? "flex" : "hidden"}`}>

                            <img src={encargado1a} className="w-[17rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado2a} className="w-[17rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado3a} className="w-[17rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado4a} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado5a} className="w-[17rem] mx-2 rounded-full" alt='encargadob' />
                        </div>


                        <div className={`${position === 4 ? "flex" : "hidden"}`}>

                            <img src={encargado1c} className="w-[17rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado2c} className="w-[17rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado3c} className="w-[17rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado4c} className="w-[17rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado5c} className="w-[17rem] mx-2 rounded-full" alt='encargadoc' />


                        </div>


                    </div>

                    <div className="absolute bottom-[-6px] text-white text-center text-3xl left-0 right-0 mx-auto font-bold font-titulo ">
                        LVL {step + 1}
                    </div>

                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>

            <div className="flex items-center  lg:hidden">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={40} />
                <div className="w-[12rem] h-[25rem] overflow-hidden  z-[99]" >
                    <div className={`flex relative transition-all duration-500 mt-[48px]`} style={{ left: `-${step * 12}rem` }}>

                        <div className={`${position === 1 ? "flex" : "hidden"}`}>

                            <img src={encargado1} className="w-[11rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado2} className="w-[11rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado3} className="w-[11rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado4} className="w-[11rem] mx-2 rounded-full" alt='encargado' />
                            <img src={encargado5} className="w-[11rem] mx-2 rounded-full" alt='encargado' />

                        </div>
                        <div className={`${position === 2 ? "flex" : "hidden"}`}>

                            <img src={encargado1b} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado2b} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado3b} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado4b} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado5b} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />



                        </div>

                        <div className={`${position === 3 ? "flex" : "hidden"}`}>

                            <img src={encargado1a} className="w-[11rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado2a} className="w-[11rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado3a} className="w-[11rem] mx-2 rounded-full" alt='encargadoa' />
                            <img src={encargado4a} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                            <img src={encargado5a} className="w-[11rem] mx-2 rounded-full" alt='encargadob' />
                        </div>


                        <div className={`${position === 4 ? "flex" : "hidden"}`}>

                            <img src={encargado1c} className="w-[11rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado2c} className="w-[11rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado3c} className="w-[11rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado4c} className="w-[11rem] mx-2 rounded-full" alt='encargadoc' />
                            <img src={encargado5c} className="w-[11rem] mx-2 rounded-full" alt='encargadoc' />


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
