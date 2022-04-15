import React, { } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal({ loadingDisable, modal, setModal, screen, children, }) {
    return (
        <div className={`fixed h-[100vh]  inset-0 z-[150]  bg-opacity-50 text-right ${!modal ? "hidden" : ""}`}>

            <div className="absolute inset-0 bg-gray-900 bg-opacity-60 max-h-[100vh]" style={{ backdropFilter: "blur(7px)" }}>

            </div>
            <div className=" absolute cursor-pointer top-3 right-3" onClick={() => setModal(false)}><AiOutlineCloseCircle color='white' size={"1.6rem"} /></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:mt-0 overflow-hidden scroll-hidden" tabindex="-1">
                <div className=" py-5 px-0 md:px-10 rounded-md ">
                    {children}
                </div>
            </div>
        </div>
    )
}