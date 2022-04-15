import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import imagen1 from "../assets/img/patoVerde.jpg"
import imagen2 from "../assets/img/imagen2.jpg"

export default function Partners() {


    const [step, setStep] = useState(0)

    const onClickStepRest = () => {

        if (step === 0) return setStep(1)
        setStep(step - 1)



    }

    const onClickStep = () => {

        if (step === 1) return setStep(0)
        setStep(step + 1)



    }


    return (
        <div >
            <h3 className=' cursor-pointer ml-3 mt-5 my-2 text-[#f9c74f] font-semibold text-[30px] text-center font-titulo'>Partners</h3>
            <div className="flex items-center">
                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[29rem] h-[28rem] overflow-hidden  m-5 z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 29}rem` }}>


                        <img src={imagen1} className="w-[28rem] mx-1 p-2 rounded-3xl" alt='imagen1' />
                        <img src={imagen2} className="w-[28rem] ml-3  p-2 rounded-3xl" alt='imagen2' />



                    </div>






                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />

            </div>



        </div >
    )
}
