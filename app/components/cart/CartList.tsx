import { Product } from "@/app/types/product"
import style from "./CartContainer.module.css"
import ProductCartCard from "./ProductCartCard"
export default function CartList() {
    const product: Product = { title: "a", id: 1, price: 1, description: "a", image: "a", category: "a" }
    return (
        <section className={style.cartList}>
            <div>
                <div className=" flex items-center pb-[20px] pt-[16px] pl-0 font-bold ">
                    <p className=" text-2xl" >Carro</p>
                    <p className=" text-lg ml-1 text-gray-800">(2 productos)</p>
                </div>
                <div className="flex flex-col gap-2">
                    <ProductCartCard product={product} />
                </div>
            </div>

        </section>
    )
}