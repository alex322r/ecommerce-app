import { RxCross1 } from "react-icons/rx"
import { FiSearch } from "react-icons/fi"

export default function SearchBar() {
    return (
        <div className="flex w-full   items-center gap-2 relative">
            <input className=" w-full placeholder:text-gray-500 px-6 py-[10px] text-lg text-gray-600 rounded-full outline-none" placeholder="Buscar en ecommerce.com" type="text" />
            <i className=" hidden w-6 h-6 justify-center items-center text-gray-500 text-xl cursor-pointer  absolute right-">
                <RxCross1 />
            </i>
            <button className="  flex justify-center items-center absolute right-0 text-3xl w-12 h-12 bg-gray-600 rounded-full" >
                <FiSearch />
            </button>
        </div>
    )
}