import React, { useEffect, useState } from 'react'




import repartidor1 from "../assets/img/repartidor1.png"
import repartidor2 from "../assets/img/repartidor2.png"
import repartidor3 from "../assets/img/repartidor3.png"
import repartidor4 from "../assets/img/repartidor4.png"
import repartidor5 from "../assets/img/repartidor5.png"
import repartidor6 from "../assets/img/repartidor6.png"
import repartidor7 from "../assets/img/repartidor7.png"

import repartidor1a from "../assets/img/repartidor1.1.png"
import repartidor2a from "../assets/img/repartidor2.1.png"
import repartidor3a from "../assets/img/repartidor3.1.png"
import repartidor4a from "../assets/img/repartidor4.1.png"
import repartidor5a from "../assets/img/repartidor5.1.png"
import repartidor6a from "../assets/img/repartidor6.1.png"
import repartidor7a from "../assets/img/repartidor7.1.png"

import repartidor1b from "../assets/img/repartidor1.2.png"
import repartidor2b from "../assets/img/repartidor2.2.png"
import repartidor3b from "../assets/img/repartidor3.2.png"
import repartidor4b from "../assets/img/repartidor4.2.png"
import repartidor5b from "../assets/img/repartidor5.2.png"
import repartidor6b from "../assets/img/repartidor6.2.png"
import repartidor7b from "../assets/img/repartidor7.2.png"

import repartidor1c from "../assets/img/repartidor1.3.png"
import repartidor2c from "../assets/img/repartidor2.3.png"
import repartidor3c from "../assets/img/repartidor3.3.png"
import repartidor4c from "../assets/img/repartidor4.3.png"
import repartidor5c from "../assets/img/repartidor5.3.png"
import repartidor6c from "../assets/img/repartidor6.3.png"
import repartidor7c from "../assets/img/repartidor7.3.png"




import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Repartidores() {


    const [step, setStep] = useState(0)
    const [position, setPosition] = useState(1)

    const onClickStepRest = () => {

        if (step === 0) return setStep(6)
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

        if (step === 6) return setStep(0)
        setStep(step + 1)



    }


    return (
        <>
            <h3 className='text-[40px] font-bold  text-[#f6bd60]  font-titulo text-center'>DEALERS</h3>
            <div className="flex items-center">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[18rem] h-[25rem] overflow-hidden  m-5 z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 18}rem` }}>

                        <div className={`${position === 1 ? "flex" : "hidden"}`}>

                            <img src={repartidor1} className="w-[17rem] mx-2 rounded-full" alt='repartidor1' />
                            <img src={repartidor2} className="w-[17rem] mx-2 rounded-full" alt='repartidor2' />
                            <img src={repartidor3} className="w-[17rem] mx-2 rounded-full" alt='repartidor3' />
                            <img src={repartidor4} className="w-[17rem] mx-2 rounded-full" alt='repartidor4' />
                            <img src={repartidor5} className="w-[17rem] mx-2 rounded-full" alt='repartidor5' />
                            <img src={repartidor6} className="w-[17rem] mx-2 rounded-full" alt='repartidor6' />
                            <img src={repartidor7} className="w-[17rem] mx-2 rounded-full" alt='repartidor7' />
                        </div>

                        <div className={`${position === 2 ? "flex" : "hidden"}`}>

                            <img src={repartidor1b} className="w-[17rem] mx-2 rounded-full" alt='repartidor1b' />
                            <img src={repartidor2b} className="w-[17rem] mx-2 rounded-full" alt='repartidor2b' />
                            <img src={repartidor3b} className="w-[17rem] mx-2 rounded-full" alt='repartidor3b' />
                            <img src={repartidor4b} className="w-[17rem] mx-2 rounded-full" alt='repartidor4b' />
                            <img src={repartidor5b} className="w-[17rem] mx-2 rounded-full" alt='repartidor5b' />
                            <img src={repartidor6b} className="w-[17rem] mx-2 rounded-full" alt='repartidor6b' />
                            <img src={repartidor7b} className="w-[17rem] mx-2 rounded-full" alt='repartidor7b' />


                        </div>

                        <div className={`${position === 3 ? "flex" : "hidden"}`}>

                            <img src={repartidor1a} className="w-[17rem] mx-2 rounded-full" alt='repartidor1' />
                            <img src={repartidor2a} className="w-[17rem] mx-2 rounded-full" alt='repartidor2a' />
                            <img src={repartidor3a} className="w-[17rem] mx-2 rounded-full" alt='repartidor3b' />
                            <img src={repartidor4a} className="w-[17rem] mx-2 rounded-full" alt='repartidor4b' />
                            <img src={repartidor5a} className="w-[17rem] mx-2 rounded-full" alt='repartidor5b' />
                            <img src={repartidor6a} className="w-[17rem] mx-2 rounded-full" alt='repartidor6b' />
                            <img src={repartidor7a} className="w-[17rem] mx-2 rounded-full" alt='repartidor7b' />
                        </div>



                        <div className={`${position === 4 ? "flex" : "hidden"}`}>

                            <img src={repartidor1c} className="w-[17rem] mx-2 rounded-full" alt='repartidor1c' />
                            <img src={repartidor2c} className="w-[17rem] mx-2 rounded-full" alt='repartidor2c' />
                            <img src={repartidor3c} className="w-[17rem] mx-2 rounded-full" alt='repartidor3c' />
                            <img src={repartidor4c} className="w-[17rem] mx-2 rounded-full" alt='repartidor4c' />
                            <img src={repartidor5c} className="w-[17rem] mx-2 rounded-full" alt='repartidor5c' />
                            <img src={repartidor6c} className="w-[17rem] mx-2 rounded-full" alt='repartidor6c' />
                            <img src={repartidor7c} className="w-[17rem] mx-2 rounded-full" alt='repartidor7c' />

                        </div>






                    </div>

                    <div className="absolute bottom-[-6px] text-white text-center text-3xl left-0 right-0 mx-auto font-bold font-titulo ">
                        LVL {step + 1}
                    </div>

                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>
        </>
    )
}
