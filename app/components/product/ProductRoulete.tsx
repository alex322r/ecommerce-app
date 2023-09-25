
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import style from "./ProductContainer.module.css"

interface props {
    productsImages: Array<any>
    activeImage: string
}

export default function ProductRoulete({ productsImages, activeImage }: props) {

    return (
        <div>
            <div className="flex justify-center text-center my-0 mx-auto max-w-[485px]">
                <div className={`${style.rouleteProductImage} ${activeImage == productsImages[0] ? style.active : ''}`}>
                    <img className=" h-full w-auto" src={`${productsImages[0]}?wid=100&hei=100&qlt=70`} alt="img" />
                </div>
                <div className={`${style.rouleteProductImage} ${activeImage == productsImages[1] ? style.active : ''}`} >
                    <img className=" h-full w-auto" src={`${productsImages[1]}?wid=100&hei=100&qlt=70`} alt="img" />
                </div>
                <div className={`${style.rouleteProductImage} ${activeImage == productsImages[2] ? style.active : ''}`} >
                    <img className=" h-full w-auto" src={`${productsImages[2]}?wid=100&hei=100&qlt=70`} alt="img" />
                </div>

            </div>

        </div>

    )
}