import { Product } from "@/app/types/product";
import DotsIcon from "./DotsIcon";

export default function ProductCartCard({ product }: { product: Product }) {
    return (
        <div className=" mb-3" >
            <div className="flex flex-col relative bg-white shadow-sm rounded-md text-gray-800 border-gray-200 ">

                <button className=" inline-flex absolute appearance-none items-center select-none whitespace-nowrap align-middle outline outline-2 outline-transparent outline-offset-2 w-8 h-8 leading-[1.2] rounded-[50vh] ">
                    <DotsIcon />
                </button>
                <div className=" invisible min-w-max absolute" >

                </div>
            </div>

        </div>
    )
}