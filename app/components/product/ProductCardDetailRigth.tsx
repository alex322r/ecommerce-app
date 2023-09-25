export default function ProductCardDetailRight() {
    return (
        <div className="flex flex-col w-1/2 min-h-[500px] pl-[30px]">
            <div className="mb-[16px] border-[#f8f8f8]">
                <div>
                    <ol>
                        <li className=" flex flex-col mb-[2px] leading-[24px] pb-[2px]">
                            <div className="flex items-center flex-wrap">
                                <span className="mr-[4px] leading-[29px] font-bold text-[#4a4a4a] text-[1.8rem]">
                                    $ 749
                                </span>
                                <div className="flex">
                                    <span className="bg-[#EB0029] text-white py-[2px] px-[5px] rounded-[3px] font-bold text-[.7rem] leading-[.9rem]">
                                        -21%
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center flex-wrap">
                                <span className=" text-[#717171] mr-[4px] leading-[19px] line-through">
                                    $ 949
                                </span>
                            </div>
                        </li>
                    </ol>

                </div>

                <div className="mt-[18px] text-[.7rem] text-[#888]">
                    Acumula hasta 749 CARD Puntos
                </div>
            </div>
            <div className="w-full mb-[24px]" >
                <div className="pt-[4px]">
                    <span className=" text-[.8rem] bg-[#3FAE2A] text-white py-[2px] px-[4px] rounded-[3px] leading-[14px]">
                        VENTA POWER
                    </span>
                </div>
            </div>
            <div className="mb-[30px]">
                <div className="mb-[16px] flex items-center">
                    <div className="w-[112px] mr-[10px]">
                        <div className=" inline-flex relative rounded-[2px] w-full h-[30px]">

                            <button className=" absolute w-[30px] h-[30px] z-10 text-[1.1rem] font-medium bottom-[10px] text-[#333] bg-[#eee] rounded-[2px] left-0 top-0 ">
                                <span>−</span>
                            </button>
                            <div className="h-[30px] m-auto w-full flex justify-center ">
                                <input max='10' min='0' step='1' value='1' autoComplete="off" type="text" className="w-[30px] text-center text-[1.1rem] font-normal leading-[19.2px]  " />
                            </div>
                            <button className=" absolute w-[30px] h-[30px] z-10 text-[1.1rem] font-medium bottom-[10px] text-[#333] bg-[#eee] rounded-[2px] -right-[2px]  -top-[2px] ">
                                <span>+</span>
                            </button>


                        </div>
                    </div>
                    <div className=" font-normal text-[12px] leading-[14.4px] text-[#888]">
                        <p>Máximo 10 unidades</p>
                    </div>
                </div>
                <div>
                    <button className="w-full h-[56px] text-[1.2rem] font-bold leading-[23px] tracking-[.5px] text-white rounded-[30px] bg-[#FF6200]">
                        Agregar al Carro
                    </button>
                </div>
                <div></div>
            </div>
            <div className=" border border-[#f8f8f8] border-solid">
                <div>
                    <a className="flex items-center max-w-full w-[300px] p-[8px] text-[rgb(51_51_51)] bg-white rounded-[5px] border border-solid border-[rgb(51_51_51)] cursor-pointer mb-[19px] " href="#">
                        <div className="text-white text-center leading-3 bg-lime-700 w-[43px] h-[26px] block mr-[10px] max-w-full rounded">
                            <span className="text-[.6rem] block">CARD</span>
                            <span className="text-[.5rem] block">VISA</span>
                        </div>
                        <div className="flex flex-col leading-[14px] items-center w-full">
                            <span className=" mb-[2px] text-center font-bold text-[#333] text-[.75rem]">
                                $40 DE REGALO CON TU NUEVA CARD VISA
                            </span>
                            <span className=" text-center text-[#333] text-[.65rem] ">
                                Pidela aqui
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}