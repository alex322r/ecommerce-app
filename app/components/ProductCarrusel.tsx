

import ProductCarruselClient from "./ProductCarruselClient"





export default function ProductCarrusel() {

    return (
        <div>
            <div>
                <div className="flex w-full flex-col h-auto max-w-7xl mt-[30px] mb-0 mx-auto">
                    <div>
                        <div className="text-[#333] text-[20px] tracking-normal leading-[30px] font-medium py-[10px] px-[40px] border-[0.8px] border-solid border-[#eee]  ">
                            <div>
                                Clientes que vieron este producto tambien vieron
                            </div>
                        </div>
                        <ProductCarruselClient />

                    </div>
                </div>
            </div>
        </div>
    )
}