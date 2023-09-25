'use client'
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"
import { ArrowLeft, ArrowRigth } from "../Arrows"
import { IoRefreshOutline } from "react-icons/io5"
import ProductDetailSection from "./ProductDetailSection"
import ProductRoulete from "./ProductRoulete"
import { useState, useEffect } from "react"

const images = ['https://s7d2.scene7.com/is/image/TottusPE/43075278_1',
    'https://s7d2.scene7.com/is/image/TottusPE/43075278_2',
    'https://s7d2.scene7.com/is/image/TottusPE/43075278_3']

export default function ProductContainer() {
    const [index, setIndex] = useState(0)
    const [activeImage, setActiveImage] = useState(images[index])
    useEffect(() => {
        setActiveImage(images[index]);
    }, [index]);

    const nextImage = () => {
        if (index < images.length - 1) {
            setIndex(prev => prev + 1)
        } else {
            setIndex(0)
        }

    }

    const previousImage = () => {
        if (index > 0) {
            setIndex(prev => prev - 1)
        } else {
            setIndex(images.length - 1)
        }

    }

    return (
        <div className="bg-white" >
            <div className=" flex items-center my-0 mx-auto max-w-7xl w-full min-h-[32px] py-0 px-[19px] pl-8 bg-transparent">
                <div className="flex items-center text-2xl">
                    <button className=" bg-none cursor-pointer " >
                        <BsArrowLeftShort />
                    </button>
                </div>
                <ol className=" antialiased flex flex-wrap text-[11px] font-bold">
                    <li className=" text-[#717171] my-[3px] mx-0 underline">
                        <Link href='/' className="py-0 px-[3px]" >Home</Link>
                    </li>
                    <li className=" before:content-['>'] before:inline-flex before:px-[3px] text-[#717171] my-[3px] mx-0 underline">
                        <a className="py-0 px-[3px]" href="#">Tecnologia-Telefonia</a>
                    </li>
                    <li className=" before:content-['>'] before:inline-flex before:px-[3px]  my-[3px] mx-0 underline">
                        <a className="py-0 px-[3px]" href="#">Celulares y telefonos</a>
                    </li>
                </ol>
            </div>
            {/* Esto deberia ser un componente separado  */}
            <div className="flex w-full justify-start pb-[20px]">
                <section className="w-[42%] pt-2 pr-3 pl-8">
                    <div className="max-w-[485px] mb-4">
                        {/* Esto tambien deberia ser un componente separado  */}
                        <div className="relative text-center mx-auto mt-0 mb-3 overflow-hidden min-h-[410px] max-h-[485px] max-w-[485px] ">
                            <button onClick={previousImage} className="left-0 shadow-[2px_0_5px_-2px] shadow-[rgba(0,0,0,0.2)] flex flex-col items-center justify-center cursor-pointer z-10 outline-none absolute top-1/2 h-16 w-[34px] bg-[rgba(255,255,255,.4)] -translate-y-1/2 " >
                                <ArrowRigth width="8" fill='c0c0c0' />
                            </button>
                            <button onClick={nextImage} className="right-0 shadow-[-2px_0_5px_-2px] shadow-[rgba(0,0,0,0.2)]  flex flex-col items-center justify-center cursor-pointer z-10 outline-none absolute top-1/2 h-16 w-[34px] bg-[rgba(255,255,255,.4)]  -translate-y-1/2 " >
                                <ArrowLeft width="8" fill='c0c0c0' />
                            </button>
                            <img src={`${activeImage}?wid=800&hei=800&qlt=70`} alt="product" />
                        </div>
                        {/* este deberia ser otro componente */}
                        <ProductRoulete productsImages={images} activeImage={activeImage} />
                    </div>
                    <div className="mt-[40px] bg-white">
                        <div className="flex items-center justify-center py-[14px] px-[20px] border border-solid border-[#f8f8f8] bg-white text-white">
                            <div>
                                <div>
                                    <div className="flex items-center text-sm  text-[#333]">
                                        <span className="w-[32px] h-[32px] bg-headset bg-full bg-center mr-[10px]" >

                                        </span>
                                        <span>Necesitas ayuda llámanos al</span>
                                        <span className="font-bold ml-[5px]" >012037074</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pt-[12px] border-t border-solid border-[#f8f8f8] flex">
                            <div className="pt-[2px] text-xl">
                                <IoRefreshOutline />
                            </div>

                            <div className=" tracking-[.14px] text-sm  flex flex-col ml-[12px] leading-[20px] text-left text-[#333]">
                                <span className="font-normal">

                                    <span>Devolver es fácil y gratis</span>
                                </span>
                                <span className="font-normal">
                                    <button className="">
                                        <span className="relative underline underline-offset-2">Conoce nuestra Satisfaccion garantizada </span>
                                        <i className="ml-[7px] font-bold text-[7px]"></i>
                                    </button>

                                </span>
                            </div>

                        </div>
                    </div>
                </section>
                <ProductDetailSection />
            </div>
        </div >

    )
}