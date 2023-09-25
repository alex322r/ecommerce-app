import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import { Product } from "../types/product";




export default function useSplitFetchedProducts() {

    const splitProducts = (products: Product[]) => {
        const productsSplited = []
        for (let i = 0; i < products.length; i += 6) {
            const group = products.slice(i, i + 6);
            if (group.length === 6) {
                productsSplited.push(group);
            }
        }
        return productsSplited
    }

    const [productsSplited, setProductsSplited] = useState<Product[][] | null>(null)


    useEffect(() => {
        const _ = async () => {
            const products = await getProducts() as Product[]
            const splitedProducts = splitProducts(products)
            setProductsSplited(splitedProducts)
        }
        _()

    }, [])


    return { products: productsSplited }
}