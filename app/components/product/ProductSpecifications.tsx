'use client'
import { useRef, useState } from "react"
import spefications from "@/app/mocks/spefications.json"

export default function ProductSpecificationSection() {
    const [showMore, setShowMore] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    const handleClick = () => {
        toggleShowMore()
        if (showMore) {
            ref.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const keys = Object.keys(spefications)

    return (
        <div ref={ref} className="mt-[30px] bg-white">
            <div style={{ height: showMore ? 'auto' : '700px' }} className={`${!showMore ? "after:content-[''] after:shadow-[inset_0_-140px_35px_0_#FFF]  after:absolute after:bottom-0 after:h-[140px] after:w-full" : "pb-[30px]"}   overflow-hidden relative`}  >
                <div className="flex pb-[30px]">
                    <div className="w-[37%] pl-[60px]">
                        <section className="w-full mx-auto max-w-7xl" >
                            <div className="pt-[20px] pb-[10px] border-b-[2px] border-solid border-[#495867]" >
                                <span className="text-[1.2rem] leading-[30px] text-[#333]">
                                    Especificaciones
                                </span>
                            </div>
                            <div className="mt-[23px]">
                                <table className="w-full text-[.88rem]">
                                    <tbody className=" ">
                                        {

                                            spefications.map((item, index) => {
                                                const [key, value] = Object.entries(item)[0]


                                                return (
                                                    <tr className=" antialiased bg-white odd:bg-[#f8f8f8]  " key={keys[index]}>
                                                        <td className="p-[21px] w-[43%] font-semibold" >{key}</td>
                                                        <td className="p-[21px] w-[57%]">{value}</td>

                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </section>
                    </div>
                    <div className="w-[63%] pr-[60px] pl-[70px]">
                        <section className="w-full mx-auto max-w-7xl">
                            <div className="pt-[20px] pb-[10px] border-b-[2px] border-solid border-[#495867]">
                                <span className=" leading-[30px] text-[#333] text-[1.2rem] ">
                                    Informacion adicional
                                </span>

                            </div>
                            <div className="mt-[23px]">
                                <div className="flex flex-wrap relative px-[15px] pb-[30px]" >
                                    <div className="font-normal text-[14px] text-left leading-[21px] text-[#333] antialiased" >
                                        <p>Tipo de pantalla:AMOLED display</p>
                                        <p>Sistema operativo:Android 13,Condición del producto: Nuevo</p>
                                        <p>¡Los celulares libres de Saga Falabella son la mejor opción para cualquier usuario! Estos teléfonos ofrecen flexibilidad para elegir la operadora que mejor se adapte a tus necesidades y presupuesto y olvídate de tener un contrato con una operadora por un período de tiempo específico.</p>
                                        <p>Además, los celulares libres de Saga Falabella tienen una gran variedad de modelos y marcas para elegir. Desde el más sofisticado hasta el más económico, con todas las funciones que necesitas. Por lo que, si buscas un teléfono para tus actividades diarias, que sea fácil de usar, con tecnología avanzada, conectividad inalámbrica y una buena cámara, entonces los celulares libres de Saga Falabella son la mejor opción para ti. </p>
                                    </div>
                                    {/* why i am here ? just to suffer? */}
                                </div>

                            </div>

                        </section>
                    </div>

                </div>
                <button onClick={handleClick} className={`${!showMore ? "absolute" : "static"} flex justify-center items-center text-[18px] leading-[22px]  text-center text-[#495867] bottom-[33px] py-[9px] w-[189px] border-[2px] border-solid border-[#495867] rounded-[20px] h-[40px] left-0 right-0 z-10 m-auto bg-white`} >
                    <span>{showMore ? 'Ver menos' : 'Ver más'}</span>
                </button>
            </div>

        </div>
    )
}