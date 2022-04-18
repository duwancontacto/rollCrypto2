import React from 'react'
import presentation from "../../assets/img/presentation.png"
export default function PresentationImage() {
    return (
        <section className="w-full lg:w-3/6">
            <img className="w-full pt-5 mx-auto" alt="presentation" src={presentation} ></img>

        </section>
    )
}
