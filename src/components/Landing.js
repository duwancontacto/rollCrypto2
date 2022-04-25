import React, { useState, useRef, useEffect } from 'react'
import video from "../assets/img/video1.mp4"
import { TiDocumentText } from 'react-icons/ti';
import { CgFileDocument } from 'react-icons/cg';
import { RiGamepadLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsTelegram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';


import { useNavigate } from "react-router-dom"


import ModalMenu from '../components/ModalMenu';
import Modal from './Modal';
import Footer from './Footer';



function App() {
    const history = useNavigate()
    const [modal, setModal] = useState(false)
    const videoRef = useRef()
    const buttonRef = useRef()
    const [botonActive, setBotonActive] = useState(false)

    useEffect(() => {
        setInterval(() => {
            if (videoRef.current) videoRef.current.play()
        }, 2000)
    }, [buttonRef])



    return (

        <div className="headerComponent">

            <Modal modal={modal} setModal={setModal} > <h3 className=' ml-3 mt-5 my-2 text-[#f9c74f] font-semibold text-3xl font-titulo'>Coming Soon...</h3></Modal>
            <ModalMenu botonActive={botonActive} setBotonActive={setBotonActive} />

            <div className="videoContainer">
                <video ref={videoRef} loop autoPlay className="w-full relative top-0 lg:top-[-100px]" >
                    <source type="video/mp4" src={video} />
                </video>
            </div>


            <div className="overlay">  </div>

            <div className="absolutee headerTitle">
                {botonActive === false && <button className='cursor-pointer absolute left-5 top-5 z-[99]' onClick={() => { setBotonActive(true) }} >< GiHamburgerMenu /></button>}


                {/*   <h3 className='text-[30px] md:text-[58px] font-bold mb-4 text-[#f6bd60] mt-2 md:mt-0 font-titulo'>
                    <button ref={buttonRef} onClick={handleClick}>GOOD ROLL CRYPTO</button>
                </h3> */}


                <div className='flex flex-col justify-end items-end w-full px-6'>
                    <a target={"_blank"} href='https://www.instagram.com/goodrollcrypto/' rel="noreferrer" className=' px-3 py-1 rounded-2xl cursor-pointer  fondo-botones '><GrInstagram size={"1.4rem"} />  </a>
                    <a target={"_blank"} href='https://twitter.com/GoodRollCrypto?t=4C2qXBsf84nSYZPnHATkzA&s=08' rel="noreferrer" className=']  my-2 px-3 py-1 rounded-2xl cursor-pointer  fondo-botones '><FiTwitter size={"1.4rem"} /></a>
                    <a target={"_blank"} href='https://discord.com/invite/Da9n28mvs2' rel="noreferrer" className='  px-3 py-1  rounded-2xl cursor-pointer  fondo-botones '><SiDiscord size={"1.4rem"} /> </a>
                    <a target={"_blank"} href='https://t.me/+1tQ6xeQ5e0s4YzI8' rel="noreferrer" className='  my-2 px-3 py-1  rounded-2xl cursor-pointer  fondo-botones '><BsTelegram size={"1.4rem"} /> </a>
                    <a target={"_blank"} href='https://www.youtube.com/channel/UCsH7Lu_hvqsTMHJxAvBqLsw/videos' rel="noreferrer" className='   px-3 py-1  rounded-2xl cursor-pointer  fondo-botones '><AiFillYoutube size={"1.4rem"} /> </a>

                </div>

                <div className=' absolute bottom-[50px] w-full flex justify-center flex-col lg:flex-row p-2 md:p-2'>
                    <button onClick={() => { history("/whitelist") }} className='flex items-center bg-[#4361ee] mt-3 justify-center mx-2 lg:mt-0 px-2 rounded-md py-1 cursor-pointer fondo-botones '><p className='mx-1'>Whitelist </p><TiDocumentText size={"1.6rem"} /></button>
                    <button className='flex items-center bg-[#4361ee] mt-3 justify-center mx-2 lg:mt-0 px-2 rounded-md  py-1 cursor-pointer text-sm fondo-botones '><p className='mx-1'>Whitepaper</p> <CgFileDocument size={"1.4rem"} color={"#fff"} /></button>
                    <button onClick={() => setModal(true)} className='flex items-center bg-[#4361ee] mt-3 justify-center  mx-2 lg:mt-0 px-0 md:px-1 rounded-md  py-1 cursor-pointer text-m-sm md:text-md fondo-botones  '><p p className='mx-1'>Play the Game </p><RiGamepadLine size={"1.4rem"} className="mr-2" /></button>

                </div>
                <Footer />



            </div>
        </div >
    );
}

export default App;
