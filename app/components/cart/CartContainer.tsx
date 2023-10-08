import React from "react";
import style from "./CartContainer.module.css"

export default function CartContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.cartPageContainer} >
            {children}
        </div>
    )
}