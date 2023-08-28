import { useState } from "react";

import { type Product } from "../types/product";

interface props {
    products: Product[];
}



export default function useSplitProducts({ products }: props) {

    const splitProducts = (products: Product[], chunkSize = 6) => {
        const productsSplited = []

        for (let i = 0; i < products.length; i += chunkSize) {
            productsSplited.push(products.slice(i, i + chunkSize))
        }
        return productsSplited
    }

    const [productsSplited, setProductsSplited] = useState(splitProducts(products))

    return { productsSplited }

}