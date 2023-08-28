'use client'

import useSlider from "../hooks/useSlider"
import useSplitProducts from "../hooks/useSplitProducts"
import { type Product } from "../types/product"
import { ProductSliderArrowLeft, ProductSliderArrowRight } from "./ProductSliderArrows"
import ProductSliderContainer from "./ProductsSliderContainer"
import style from "./Slider.module.css"

interface props {
    slides: Array<any>
}

export default function ProductsSlider({ slides }: props) {

    const { productsSplited } = useSplitProducts({ products: slides })
    const { index, selectSlide, prevSlide, nextSlide } = useSlider({ slides: productsSplited })

    return (
        <div className="" >
            <div className="flex justify-center">
                <ProductSliderArrowLeft prevSlide={prevSlide} />
                <div className={style.sliderContainer}>
                    {
                        productsSplited.map(((products, i) => {

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

                                <ProductSliderContainer position={position} products={products} key={products[0].id} />
                            )


                        }))
                    }
                </div>
                <ProductSliderArrowRight nextSlide={nextSlide} />
            </div>

            <ol className='flex justify-center py-3'>
                {
                    productsSplited.map((_, i) => {
                        return <li onClick={() => selectSlide(i)} key={i} className={`${style.dot} ${i === index ? style.activeDot : ''}`}></li>
                    })
                }
            </ol>

        </div>

    )
}