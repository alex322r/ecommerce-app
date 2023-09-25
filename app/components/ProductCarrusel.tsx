

import ProductCarruselClient from "./ProductCarruselClient"



export function LeftArrow() {
    return (

        <svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z">
            </path>
        </svg>

    )
}

export function RigthArrow() {
    return (

        < svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" >
            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12">
            </polygon>
        </svg >

    )
}


export function ProductCarruselArrow({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (

        <div className="flex items-center bg-white mb-[6px]">
            <div onClick={onClick} className="flex w-[21.71px] h-[40.86px] bg-white cursor-pointer items-center justify-center shadow-lg">
                {children}
            </div>
        </div>

    )
}

export default function ProductCarrusel() {




    return (
        <div>
            <div>
                <div className="flex w-full flex-col h-auto max-w-7xl mt-[30px] mb-0 mx-auto bg-white">
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