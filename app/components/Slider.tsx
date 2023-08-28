'use client'

import style from "./Slider.module.css"
import useSlider from "../hooks/useSlider"
import { LeftArrow, RightArrow } from "./SliderArrows"
import Image from "next/image"


interface props {
    arrows: boolean
    slides: Array<any>

}

export default function Slider({ arrows, slides }: props) {
    const { index, selectSlide, prevSlide, nextSlide } = useSlider({ slides, autoplay: true })
    return (
        <div>
            <div className={style.sliderContainer}>
                {arrows && <LeftArrow prevSlide={prevSlide} />}
                {arrows && <RightArrow nextSlide={nextSlide} />}
                {
                    slides.map((slide, i) => {
                        let position = style.next
                        if (i === index) {
                            position = style.active
                        }
                        if (
                            i === index - 1 ||
                            (index === 0 && i === slides.length - 1)
                        ) {
                            position = style.last
                        }
                        return (
                            <div className={`${style.sliderItem} ${position}`} key={i}>
                                <Image src={slide} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
            <ol className='flex justify-center py-3'>
                {
                    slides.map((_, i) => {
                        return <li onClick={() => selectSlide(i)} key={i} className={`${style.dot} ${i === index ? style.activeDot : ''}`}></li>
                    })
                }
            </ol>
        </div>
    )
}