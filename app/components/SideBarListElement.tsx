import style from "./SideBar.module.css"
import Arrow from "./Arrow"
import React, { ReactEventHandler } from "react"

interface props {
  label: string
  sale: boolean
  isNew: boolean
  handleOnMouseOver: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function SideBarListElement({ label, sale, isNew, handleOnMouseOver } : props) {
    return (

        <div data-label={label} onMouseOver={handleOnMouseOver} className={style.sideBarDesktopCategoryWrapper}>
            <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>
                    {label}{sale && <span className={style.sideBarDesktopFirstLevelCategoriesLabel}>SALE</span>}{isNew && <span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span>}
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                    <Arrow />
                </div>
            </div>
        </div>
    )
}