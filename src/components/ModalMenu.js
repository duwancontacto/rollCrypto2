import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from './Modal';
import NftWhitelist from './NftWhitelist';
import Dealers from "../components/Dealers"



import apeswap from "../assets/img/apeswap.png"
import binance from "../assets/img/binance.png"
import Chainlink from "../assets/img/chainlink.png"
import unity from "../assets/img/unity.png"
import pancakeswap from "../assets/img/pancakeswap.png"
import FrequentQuestions from './FrequentQuestions';
import History from './History';
import Partners from './Partners';
import Managers from './Managers';






export default function ModalMenu({ botonActive, setBotonActive }) {


    const [modal, setModal] = useState(false)


    return (
        <div className={`modal ${botonActive ? "botonActive" : "botonDesactive"} w-[300px] h-[100vh] bg-[#21222d] overflow-auto`}>

            <Modal modal={modal} setModal={setModal} >

                {modal === "Dealers" && <Dealers />}
                {modal === "Whitelist" && <NftWhitelist />}
                {modal === "FrequentQuestions" && <FrequentQuestions />}
                {modal === "History" && <History />}
                {modal === "Partners" && <Partners />}
                {modal === "Managers" && <Managers />}

            </Modal>

            <div className='z-[100] absolute right-4 top-4 cursor-pointer' onClick={() => { setBotonActive(false) }} ><AiOutlineCloseCircle color='white' size={"1.6rem"} /></div>
            <h3 className=' ml-2 mt-10 my-2 text-lg text-[#f9c74f] font-semibold'>Token GRC</h3>
            <p className='text-[rgba(211,211,211,0.81)] hover:text-white flex justify-start items-center pl-5 mb-2 cursor-pointer   '>Buy Apeswap<p className='text-[#f9c64fcf] text-md mx-2'>(comming soon...)</p> </p>
            <p className='text-[rgba(211,211,211,0.81)] hover:text-white pl-5  flex justify-start items-center cursor-pointer  '>Buy PancakesSwap <p className='text-[#f9c64fcf] text-md mx-2'>(comming soon...)</p></p>
            <h3 className=' ml-2 mt-5 my-2 text-lg text-[#f9c74f] font-semibold'> NFTS</h3>
            <p onClick={() => { setModal("Managers") }} className='text-[rgba(211,211,211,0.81)] hover:text-white pl-5 flex justify-start items-center cursor-pointer  '>Managers</p>
            <p onClick={() => { setModal("Dealers") }} className='text-[rgba(211,211,211,0.81)]  hover:text-white pl-5 flex justify-start items-center my-2 cursor-pointer  '>Dealers</p>
            <p onClick={() => { setModal("Whitelist") }} className='text-[rgba(211,211,211,0.81)] hover:text-white pl-5 flex justify-start items-center cursor-pointer mt-2 '>Whitelist </p>
            <p className='text-[rgba(211,211,211,0.81)] pl-5  hover:text-white flex justify-start items-center cursor-pointer  '>Stores <p className='text-[#f9c64fcf] text-md mx-2'>(comming soon...)</p></p>
            <h3 onClick={() => { setModal("History") }} className=' cursor-pointer ml-3  my-2 text-[#f9c74f] font-semibold text-lg pt-10'>History</h3>
            <h3 onClick={() => { setModal("Partners") }} className=' cursor-pointer ml-3  my-2 text-[#f9c74f] font-semibold text-lg'>Partners</h3>
            <h3 onClick={() => { setModal("FrequentQuestions") }} className=' cursor-pointer ml-3 text-[#f9c74f] font-semibold text-lg'>Frequent questions</h3>





            <div className=' mx-6 flex flex-wrap md:hidden '>

                <div className='flex items-center w-[6rem] cursor-pointer'><img src={apeswap} alt="apeswap" /></div>
                <div className='flex  items-center w-[5rem] mx-3  cursor-pointer'><img src={binance} alt="binance" /></div>
                <div className='flex  items-center w-[5rem]  cursor-pointer'><img src={Chainlink} alt="chainlink" /></div>
                <div className='flex  items-center w-[4rem] mx-3  cursor-pointer'><img src={unity} alt="uniy" /></div>
                <div className='flex  items-center w-[6rem]  cursor-pointer '><img src={pancakeswap} alt="pancakeswap" /></div>
            </div>
        </div>


    )
}