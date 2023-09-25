import { Product } from "../types/product"

export default async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) {
            throw new Error("Something went wrong")
        }
        const data = await res.json()
        const products: Product[] = data
        return products
    } catch (error) {
        console.log(error)
    }

}