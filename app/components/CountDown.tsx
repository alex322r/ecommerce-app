'use client'



import useCountDown from "../hooks/useCountDown"

export default function CountDown() {

    const { hours, minutes, seconds } = useCountDown()


    return (
        <div className="ml-[1rem]">
            <div className=" inline">
                <div className=" inline-block">
                    <span className="bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {hours < 10 ? '0' : hours.toString()[0]}
                    </span>
                    <span className="ml-[.125rem] bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {hours < 10 ? hours.toString() : hours.toString()[1]}
                    </span>
                </div>
                <span className="text-[1.3rem] font-bold py-[.1rem] px-[.3rem] align-middle text-white">:</span>
            </div>
            <div className=" inline">
                <div className=" inline-block">
                    <span className="bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {minutes < 10 ? '0' : minutes.toString()[0]}
                    </span>
                    <span className="ml-[.125rem] bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {minutes < 10 ? minutes.toString() : minutes.toString()[1]}
                    </span>
                </div>
                <span className="text-[1.3rem] font-bold py-[.1rem] px-[.3rem] align-middle text-white ">:</span>
            </div>
            <div className=" inline">
                <div className=" inline-block">
                    <span className="bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {seconds < 10 ? '0' : seconds.toString()[0]}
                    </span>
                    <span className="ml-[.125rem] bg-white inline-block align-middle rounded-[.365625rem] h-[2.87vw] w-[2.18vw] pt-[0.2rem] text-[1.74vw] font-bold text-center text-[#1a1a1a]">
                        {seconds < 10 ? seconds.toString() : seconds.toString()[1]}
                    </span>
                </div>
            </div>
        </div>
    )

}