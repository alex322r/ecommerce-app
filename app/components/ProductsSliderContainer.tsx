import { Product } from "../types/product"
import ProductSliderCard from "./ProductSliderCard"
import style from "./Slider.module.css"

interface props {
    products: Product[]
    position?: string
}

export default function ProductSliderContainer({ products, position }: props) {
    return (
        <div className={`${position} ${style.sliderItem} mx-auto flex absolute min-w-[1181px] max-w-[1181px]`}>
            {
                products.map(product => {
                    return <ProductSliderCard key={product.id} product={product} />;
                })
            }

        </div>
    )

}