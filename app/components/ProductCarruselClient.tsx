'use client'
import { CSSProperties, useState } from "react"

import useSplitFetchedProducts from "../hooks/useSplitFetchedProducts"
import ProductCarruselCard from "./ProductCarruselCard"

export function LeftArrow() {
    return (

        <svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z">
            </path>
        </svg>

    )
}

export function RigthArrow() {
    return (

        < svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" >
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12">
            </polygon>
        </svg >

    )
}


export function ProductCarruselArrow({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (

        <div className="flex items-center bg-white mb-[6px]">
            <div onClick={onClick} className="flex w-[21.71px] h-[40.86px] bg-white cursor-pointer items-center justify-center shadow-lg">
                {children}
            </div>
        </div>

    )
}

export default function ProductCarruselClient() {
    const { products } = useSplitFetchedProducts()

    const [index, setIndex] = useState(1)


    const style: CSSProperties = {
        transform: `translateX(-${index * 1237}px)`,
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-in-out',
    }

    const prevSlide = () => {
        if (!products) return
        if (index <= 0) {
            setIndex(products.length - 1)
            return
        }
        setIndex(index - 1)
    }

    const nextSlide = () => {
        if (!products) return
        if (index >= products.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }


    return (
        <div className="flex w-full flex-col items-center">
            <div className="relative flex w-full">
                <ProductCarruselArrow onClick={prevSlide} >
                    <LeftArrow />

                </ProductCarruselArrow>

                <div className="flex overflow-hidden">
                    <div className="flex w-full transition-transform" style={style} >
                        {
                            products?.map((product) => {
                                const key = product[0].id
                                return (
                                    <div className="flex h-auto mb-[6px] min-w-[1237px] max-w-[1237px] " key={key} >
                                        {
                                            product.map((item) => {
                                                return (
                                                    <ProductCarruselCard key={item.id} product={item} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })


                        }
                    </div>

                </div>
                <ProductCarruselArrow onClick={nextSlide} >
                    <RigthArrow />

                </ProductCarruselArrow>

            </div>
            <div className="flex">
                {
                    products?.map((product, i) => {
                        return (
                            <div onClick={() => setIndex(i)} key={product[0].id} className={`w-[8px] h-[8px] m-[3.5px] rounded-full cursor-pointer ${index === i ? 'bg-orange-500' : 'bg-slate-200'}`}>

                            </div>
                        )
                    })
                }

            </div>
        </div>



    )
}