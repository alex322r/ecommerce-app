import ProductContainer from "@/app/components/product/ProductContainer"
import ProductSpecificationSection from "@/app/components/product/ProductSpecifications"
import ProductCarrusel from "@/app/components/ProductCarrusel"
interface params {
    id: string
}

export default function ProductPage({ params }: { params: params }) {

    return (
        <div>
            <section className="bg-[#eee] pb-[20px] overflow-auto">
                <div className="w-full max-w-7xl my-0 mx-auto">
                    <div className="my-[10px] mx-0  ">
                    </div>
                    <ProductContainer />
                    <ProductSpecificationSection />
                    <ProductCarrusel />
                </div>

            </section>
        </div>
    )
}