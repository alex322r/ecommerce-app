import style from "./CartContainer.module.css"
export default function CartList({ children }: { children: React.ReactNode }) {
    return (
        <section className={style.cartList}>
            <div>
                <div className=" flex items-center pb-[20px] pt-[16px] pl-0 "></div>
                <div className="flex flex-col gap-2"></div>
            </div>

        </section>
    )
}