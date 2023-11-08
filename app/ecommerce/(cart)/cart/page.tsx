'use client'

import CartFooter from "@/app/components/cart/CartFooter"

import EmptyCart from "../../../components/cart/EmptyCart"
import { useState } from "react"
import CartContainer from "@/app/components/cart/CartContainer"
import { Product } from "@/app/types/product"
import products from "../../../mocks/products.json"
import CartList from "@/app/components/cart/CartList"
export default function CartPage() {

    const [cart, setCart] = useState<Product[] | []>(products)

    return (
        <div className="flex flex-col  bg-[#eee] h-[calc(100vh-72px)] ">
            <div className="flex-auto">
                <CartContainer>
                    {

                        cart.length > 0 ?
                            <CartList />
                            :
                            <EmptyCart />
                    }

                </CartContainer>


            </div>
            <CartFooter />
        </div>
    )
}