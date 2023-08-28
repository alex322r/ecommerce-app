import Image from "next/image"
import { Lato } from "next/font/google"
import { Product } from "../types/product"

const lato = Lato({
    subsets: ["latin"],
    weight: ['100', '300', '400', '700', '900']
})

interface props {
    product: Product
}


export default function ProductSliderCard({ product }: props) {
    return (
        <div className={`${lato.className} w-1/6`}>
            <a className="" >
                <div className="relative  h-full p-[5.3719%] max-h-[385px] my-0 mx-auto flex flex-col w-[77.6363%]">
                    <div className="w-[135px] h-[135px] overflow-hidden relative my-[5%]">
                        <picture>
                            <Image fill className="w-full h-auto" src={product.image} alt="product" />
                        </picture>

                        <span className={` text-white bg-[rgb(235,0,41)] absolute top-0  right-0 rounded text-xs font-bold leading-[14.4px] py-[2px] px-[5px]`}>-11%</span>
                    </div>
                    <div>
                        <div className=" overflow-hidden whitespace-nowrap text-ellipsis max-w-[12rem] mb-[5px] uppercase text-[12px] leading-[1.4rem] font-bold text-[#767676] ">{product.category}</div>
                        <div className=" mb-[8px] font-bold  leading-[1.2] text-[#4a4a4a] h-[34px] overflow-hidden ">{product.title}</div>
                    </div>
                    <div className="leading-[1.3rem] min-w-[7.3125rem] text-[18px] text-left text-[#717171]">${product.price}</div>
                    <div className="leading-[1.2rem] text-[#717171] text-[14px] line-through">${product.price + 10.90}</div>
                    <button className="mt-auto w-full h-[36px] text-[#fafafa] rounded-[20px] bg-[#495867] text-[15px]">Ver Producto</button>
                </div>
            </a>
        </div>
    )
}