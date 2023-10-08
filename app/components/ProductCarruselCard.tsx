import { Product } from "../types/product";
import style from "./ProductCarruselCard.module.css"
import Image from "next/image";
export default function ProductCarruselCard({ product }: { product: Product }) {

    const productPriceFixed = product.price.toFixed(2)
    const productPriceWithoutDescountFixed = (product.price + 10.9).toFixed(2)
    const productNameShort = product.title.substring(0, 30)
    const productDescriptionShort = product.description.substring(0, 30)
    return (
        <div className={`group w-1/6  ${style.card}`}>
            <a href="#">
                <div className="flex flex-col relative h-full my-0 mx-auto w-[77.6363%] py-[5.3719%] max-h-[385px]">
                    <div className="mt-0 mx-auto mb-[13%] w-[153px] h-[153px] overflow-hidden relative">
                        <picture>
                            <Image fill className="w-full  h-auto" src={product.image} alt="aa" loading="lazy" />
                        </picture>
                        <span className="bg-[rgb(235_0_41)] text-white rounded-[3px] text-[12px] leading-[14.4px] py-[2px] px-[5px] absolute top-0 right-0" >
                            -19%
                        </span>
                    </div>
                    <div>
                        <div className="uppercase text-[13px] text-[#767676] font-bold  mb-[6px] overflow-hidden text-ellipsis whitespace-nowrap max-w[120px]">
                            {productNameShort}
                        </div>
                        <div className="text-[15px] font-bold leading-4  text-[#4a4a4a] overflow-hidden" >
                            {productDescriptionShort}
                        </div>
                    </div>
                    <div className="mt-0 leading-[28px]" >{productPriceFixed}</div>
                    <div className="text-[#717171] text-[14px] h-[18px] line-through" >{productPriceWithoutDescountFixed}</div>
                    <button className="mt-[43.625px] group-hover:visible w-full h-[36px] font-bold tracking-[1px] text-[#fafafa] invisible rounded-[20px] bg-[#495867] text-[15px]"  >Ver producto</button>
                </div>
            </a>

        </div>
    )
}