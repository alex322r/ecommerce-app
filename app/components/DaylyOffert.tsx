/* eslint-disable @next/next/no-img-element */
import { RiTimerFlashLine } from "react-icons/ri"
import dynamic from "next/dynamic"
import daylyOffertImage from "../assets/images/dayly-offert.png"

const CountDown = dynamic(() => import("./CountDown"), { ssr: false })

export default function DaylyOffert() {
    return (
        <div className="py-5 px-[15px] min-w-[1181px] max-w-7xl  mx-auto ">
            <div className="bg-[#484E59] relative inline-block  w-full rounded-[1.4rem] rounded-b-[.7rem]">
                <div className="flex w-full select-none items-center justify-start" >
                    <div className=" flex min-h-[2.938rem] px-8 text-[2.33vw] tracking-[.125rem]  ">
                        <div className="flex items-center ">
                            <span className="text-white font-medium">&nbsp;SOLO x HOY</span>
                            <p className="text-white ml-[8px]"><RiTimerFlashLine /></p>

                        </div>

                    </div>
                    <CountDown />
                </div>
                <div className="flex pt-[.6rem] pb-[.5rem]  pl-[.5rem] ">
                    <div>
                        <div className="mr-[.5rem] hover:opacity-90   overflow-hidden rounded-[.75rem] ">
                            <a href="#">
                                <img src={daylyOffertImage.src} alt="img" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="mr-[.5rem] hover:opacity-90  overflow-hidden rounded-[.75rem]">
                            <a href="#">
                                <img src={daylyOffertImage.src} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}