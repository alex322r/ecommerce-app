import { useState, useEffect } from "react"

interface props {
    slides: Array<any>
    autoplay?: boolean
}


export default function useSlider({ slides, autoplay }: props) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!autoplay) return
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > slides.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index, slides.length, autoplay])

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > slides.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = slides.length - 1
            }
            return index
        })
    }

    const selectSlide = (index: number) => {
        setIndex(index)
    }

    return { index, nextSlide, prevSlide, selectSlide }
}