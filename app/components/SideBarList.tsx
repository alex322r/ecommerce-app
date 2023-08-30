/* eslint-disable @next/next/no-img-element */
interface SideBarCategories {
    label: string
    icon: string
    sale: boolean
    new: boolean
}

const list = new Array(10).fill('item').map((item, i) => item + (i + 1))

export default function SideBarList({ content }: { content: SideBarCategories }) {
    return (
        <div className="flex max-w-[904px] min-w-[468px] pt-6 pr-2 pb-16 pl-8 mt-[59px] bg-white h-screen rounded-tr-[20px] text-[#212529] ">
            <div className=" overflow-y-scroll overflow-x-hidden">
                <div className="flex justify-between items-center pr-8 min-w-[468px]">
                    <div className="relative text-white  max-w-[619px]  rounded-tl-[80px] rounded-br-[140px] rounded-bl-[80px] text-2xl px-[72px] py-[12px] mr-[20px] flex flex-grow-[2] flex-shrink-0 basis-auto bg-gradient-to-r from-orange-400 to-orange-600 ">
                        <div className="flex justify-center items-center overflow-hidden absolute w-[56px] h-[56px] rounded-full left-0 top-0 bg-gradient-to-br from-orange-400 to-orange-500">
                            <img className=" w-full h-full" src={content.icon} alt="icon" />
                        </div>
                        <a className="font-black" href="#">{content.label}</a>
                    </div>
                    <a className="  text-sm text-[#68717d] underline underline-offset-4" href="#">Ver todo</a>
                </div>
                <div className="flex justify-between mt-[-8px]">
                    <div style={{ width: '911px' }} className="flex flex-col flex-wrap justify-start content-start max-h-[715px]" >
                        {
                            list.map((item, index) => {
                                return (
                                    <ul key={item} className=" break-inside-avoid-column block w-[186px] mt-[32px] mr-[32px]">
                                        <li className="text-[19px] font-bold leading-[22.8px] text-[#ff6200] mb-[8px]">Tendencias</li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="#">Mundo Gamer<span className="text-white  text-[10px] leading-[12px] font-bold tracking-[.4px] py-[3px] px-[6px] bg-[#0c2941] rounded-lg mx-[10px]">NUEVO</span>
                                            </a>
                                        </li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="#">¡Prepárate para la carrera!</a>
                                        </li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="">Especial Mascotas</a>
                                        </li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="#">Productos virales TikTok</a>
                                        </li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="">Mundo KPOP</a>
                                        </li>
                                        <li className="text-[14px] leanding-[16px] font-normal mb-[12px] text-[#495867]">
                                            <a rel="noreferrer noopener" target="_self" href="">¡Vamos de campamento!</a>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}