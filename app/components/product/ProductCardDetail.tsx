import ProductCardDetailLeft from "./ProductCardDetailLeft"
import ProductCardDetailRight from "./ProductCardDetailRigth"

export default function ProductCardDetail() {
    return (
        <div>
            <div className="flex mt-[16px]">
                <ProductCardDetailLeft />
                <ProductCardDetailRight />

            </div>
        </div>
    )
}