import { Rating } from "@mui/material"
import { AiFillExclamationCircle } from "react-icons/ai"
import { PiCaretRightBold } from "react-icons/pi"
import ProductCardDetail from "./ProductCardDetail"

export default function ProductDetailSection() {
    return (
        <section className=" flex flex-col py-0 pr-[44px] pl-[49px] w-[58%] border-solid border-l border-[#f8f8f8]">
            {/* Esto deberia ser un componente se lo dejare para el Alexis del futuro no envio a ese sujeto esta bastante jodido
            por que escribo esto? la verdad no se pero ahora mismo no estoy pensando claramente  */}
            <div className="w-full" >
                <div className="flex  justify-between mt-[3px]" >
                    <div className="h-[16px] text-[12px] font-bold tracking-[1.08px] leading-[16px] uppercase ">
                        <a className="text-[#333]">
                            xiaomi
                        </a>
                    </div>
                    <div className="flex items-cente" >
                        <div className="text-[#767676] text-[11px] tracking-[.2px] leading-[13px]  ">
                            <span>Código: 19755241
                            </span>
                        </div>
                        <div className="w-0 h-[18px] border-l border-solid border-[#f0f0f0] my-0 mx-[4px]">

                        </div>
                        <div className="text-[#767676] text-[11px] tracking-[.2px] leading-[13px]" >
                            <span>
                                Cód. tienda: 19755241
                            </span>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between mt-[3px]">
                    <h1 className="text-[20px] leading-normal text-[#333] font-light tracking-[-0.3px] mr-[15px]">
                        Redmi Note 12 128GB 4GB
                    </h1>
                </div>
                {/* este deberia ser un componente reviews */}
                <div className="flex items-center mt-[8px]">
                    <div className="flex relative mt-[3px] w-1/2" >
                        <div className="">
                            <div className=" inline-flex flex-wrap my-[10px] bg-white ">
                                <button className="p-0 inline-flex items-center pr-[8px]">
                                    <Rating className="pr-[8px]" size="small" defaultValue={4.4} precision={0.1} readOnly />
                                    <div className="pr-[1.4px] text-[14px]   cursor-pointer hover:underline " >
                                        4.7
                                    </div>
                                    <div className="flex items-center whitespace-nowrap">
                                        &nbsp;
                                        <div className=" hover:underline whitespace-nowrap text-[#333] text-[14px] font-normal  ">(18)</div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className=" flex items-center  pl-[30px] pr-[3px]">
                        <span className="mr-0 text-[14px] bg-[#333] text-white font-bold rounded-[3px] tracking-[0] pt-[1px] px-[6px] pb-[3px] uppercase leading-[17px] pointer-events-none">
                            black out
                        </span>
                    </div>

                </div>
            </div>
            <hr className="border w-full border-solid border-[#f8f8f8]" />
            {/* otro componente */}
            <ProductCardDetail />
        </section>
    )
}