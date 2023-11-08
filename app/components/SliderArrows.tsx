import { ArrowRigth } from "./Arrows"
import { ArrowLeft } from "./Arrows"
import style from "./Slider.module.css"

interface props {
    prevSlide?: () => void
    nextSlide?: () => void
}

export function LeftArrow({ prevSlide }: props) {
    const hadleClick = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (prevSlide)
            prevSlide()

    }
    return (
        <a onClick={hadleClick} className={`${style.arrow} hidden justify-center bg-black opacity-20  w-11 h-11 z-50 absolute bottom-1/2`} href="/#"><ArrowRigth /> </a>
    )
}

export function RightArrow({ nextSlide }: props) {
    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (nextSlide)
            nextSlide()
    }
    return (
        <a onClick={handleClick} className={`${style.arrow} hidden justify-center bg-black opacity-20 w-11 h-11 z-50 absolute bottom-1/2 right-0`} href="/#"><ArrowLeft /> </a>
    )
}