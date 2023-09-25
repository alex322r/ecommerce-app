import { AiFillExclamationCircle } from "react-icons/ai"
import { SlArrowRight } from "react-icons/sl"

export default function ProductCardDetailLeft() {
    return (
        <div className="flex flex-col w-1/2 min-h-[500px]">
            <div className="mb-[16px] flex flex-col items-baseline">
                <div className="flex flex-wrap items-center text-[#333] tracking-[.14px] text-[.8rem] pb-[12px] pt-[6px] border-b border-solid border-[#f8f8f8] w-full">
                    <span>Vendido por &nbsp;</span>
                    <span className="bg-red-400 h-[18px] w-[12px] ml-[2px] mr-[6px] align-middle inline-block"></span>
                    <a className="bg-transparent" href="#">
                        <span className=" capitalize border-[#333] border-solid border-b-[.5px]">
                            fallabella
                        </span>
                    </a>
                    <div className="relative flex">
                        <AiFillExclamationCircle className="text-[#495867] cursor-pointer inline-block rotate-180 ml-[5px] text-[.9rem]" />
                    </div>
                </div>
            </div>

            <div>
                <span className=" text-[.9rem] font-bold text-[#333]">Color: </span>
                <span className=" text-[.9rem] font-normal text-[#333]"> Gray</span>
                <div className="relative flex mb-[13px] max-w-[305px] w-full">
                    <ul className=" flex items-center flex-wrap mt-[14px] w-full">
                        <li className="mr-[4px] w-[32px] h-[32px] rounded-full p-[1px] flex border-[2px] border-solid border-[rgb(187_187_187)]">
                            <button className="m-auto bg-[rgb(196_196_196)] h-[22px] w-[22px] cursor-pointer] rounded-full border border-solid border-[rgb(187_187_187)]"></button>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <div className="mt-[6px] flex flex-col h-auto w-full py-[5px]" >
                    <div className=" text-[#333] flex justify-between h-auto w-full m-0 py-[6px]">
                        <div className=" bg-car h-[32px] w-[32px] mt-[3px] min-w-[32px] bg-no-repeat bg-contain bg-center ">

                        </div>
                        <div className="h-auto w-full pl-[9px] justify-center flex flex-col items-start text-[14px] leading-[18px]">
                            <div className="flex flex-col">
                                <span className="font-bold">
                                    Despacho a domicilio
                                </span>
                            </div>
                            <div className="cursor-pointer text-[#4a4a4a]">
                                <div className=" outline-none inline">
                                    <span className=" text-[.8rem]  border-b-[.5px] border-solid border-[#4a4a4a]">
                                        Ver disponibilidad
                                    </span>
                                    <span>
                                        <SlArrowRight className="inline-block text-[.8rem] pl-[4px]" />

                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" text-[#333] flex justify-between h-auto w-full m-0 py-[6px]">
                        <div className=" bg-place h-[32px] w-[32px] mt-[3px] min-w-[32px] bg-no-repeat bg-contain bg-center ">

                        </div>
                        <div className="h-auto w-full pl-[9px] justify-center flex flex-col items-start text-[14px] leading-[18px]">
                            <div className="flex flex-col">
                                <span className="font-bold">
                                    Retira tu compra
                                </span>
                            </div>
                            <div className="cursor-pointer text-[#4a4a4a]">
                                <div className=" outline-none inline">
                                    <span className=" text-[.8rem]  border-b-[.5px] border-solid border-[#4a4a4a]">
                                        Ver disponibilidad
                                    </span>
                                    <span>
                                        <SlArrowRight className="inline-block text-[.8rem] pl-[4px]" />

                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}