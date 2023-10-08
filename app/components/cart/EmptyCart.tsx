import style from "./CartContainer.module.css"
import CartIcon from "./CartIcon"
export default function EmptyCart() {
    return (
        <section className={style.emptyCart}>
            <div className="relative flex flex-col items-center bg-white shadow-lg rounded-xl text-gray-700 border-gray-200 ">
                <div className=" flex-1 p-4 text-gray-500 w-full" >
                    <div className="flex flex-col items-center gap-3 ">
                        <div className="flex items-center gap-2">
                            <CartIcon className=" inline-block leading-3 text-current align-middle  w-[120px] h-[120px]" />
                            <div className=" flex flex-col  my-0 m-[5px] ">
                                <h2 className="text-[20px] leading-6 text-gray-800 font-bold"  > Tu Carro esta vacio </h2>
                                <p className=" mt-1 leading-5 text-[16px] max-w-[290px] text-gray-800" >
                                    Inicia sesion para ver los productos que habias guardado en tu Carro
                                </p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 w-full items-center  mt-1  ">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white relative whitespace-nowrap align-middle outline outline-transparent outline-2 outline-offset-2    items-center select-none  w-72 h-12 text-xl rounded-3xl font-bold ">
                                Iniciar sesion
                            </button>
                            <div className="flex items-center justify-center   mt-1" >
                                <p className=" text-sm text-gray-500" >¿No tienes cuenta?</p>
                                <a href="#" className=" ml-1 text-sm underline text-gray-600" >Regístrate</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}