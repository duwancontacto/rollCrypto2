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
            <h3 className=' cursor-pointer ml-3 mt-5 my-2 text-[#f9c74f] font-semibold text-[30px] md:text-[40px] text-center font-titulo'>Partners</h3>
            <div className=" items-center hidden lg:flex">
                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[28rem] h-[28rem] overflow-hidden  m-5 z-[99] " >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 28}rem` }}>


                        <img src={imagen1} className=" w-[28rem]  mx-1 p-2 rounded-3xl" alt='imagen1' />
                        <img src={imagen2} className="w-[28rem] mr-6  p-2 rounded-3xl" alt='imagen2' />



                    </div>






                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />

            </div>

            <div className="flex items-center lg:hidden ">
                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative " color={"#f1f1f1"} size={40} />
                <div className="w-[18rem] md:w-[20rem] h-[17rem] overflow-hidden   z-[99]" >
                    <div className={`flex relative transition-all duration-500 `} style={{ left: `-${step * 18}rem` }}>


                        <img src={imagen1} className=" w-[15rem]  ml-9 md:ml-0 mx-1 p-2 rounded-3xl" alt='imagen1' />
                        <img src={imagen2} className="w-[15rem] ml-6 md:ml-3  p-2 rounded-3xl" alt='imagen2' />



                    </div>






                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative " color={"#f1f1f1"} size={40} />

            </div>



        </div >
    )
}
