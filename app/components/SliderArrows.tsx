import { ArrowRigth } from "./Arrows"
import { ArrowLeft } from "./Arrows"
import style from "./Slider.module.css"

interface props {
    prevSlide?: () => void
    nextSlide?: () => void
}

export function LeftArrow({ prevSlide }: props) {
    return (
        <a onClick={prevSlide} className={`${style.arrow} hidden justify-center bg-black opacity-20  w-11 h-11 z-50 absolute bottom-1/2`} href="/#"><ArrowRigth /> </a>
    )
}

export function RightArrow({ nextSlide }: props) {
    return (
        <a onClick={nextSlide} className={`${style.arrow} hidden justify-center bg-black opacity-20 w-11 h-11 z-50 absolute bottom-1/2 right-0`} href="/#"><ArrowLeft /> </a>
    )
}