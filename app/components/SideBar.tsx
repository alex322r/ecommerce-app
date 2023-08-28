/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import style from "./SideBar.module.css"
import sideBarCategories from "../mocks/sidebarCategories.json"
import appStyle from "../App.module.css"
import SideBarListElement from "./SideBarListElement"

interface props {
  closeSideBar: () => void
}

export default function SideBar({ closeSideBar }: props) {
  useEffect(() => {
    const $body = document.querySelector("body")
    $body?.classList.add(appStyle.HamburguerBtnNavigationOpen)
    let $overlay: HTMLDivElement
    $overlay = document.createElement("div")
    $overlay.addEventListener("click", closeSideBar)
    $overlay.classList.add(appStyle.overlay)
    $body?.appendChild($overlay)
    return () => {
      $body?.classList.remove(appStyle.HamburguerBtnNavigationOpen)
      $body?.removeChild($overlay)
      $overlay.removeEventListener("click", closeSideBar)
    }
  }, [closeSideBar])

  return (
    <div className={style.sideBarDesktop}>
      <div className={style.sideBarDesktopContainer}>
        <div className={style.sideBarDesktopTitle}>
          <div className={style.sideBarDesktopText}>¡Hola!</div>
          <div onClick={closeSideBar} className={style.sideBarDesktopCloseIcon}>
          </div>
        </div>
        <div className={style.sideBarDesktopScrollWrapper}>
          <div className={style.sideBarDesktopModuleBox}>
            {
              sideBarCategories.map(category => {
                return (<SideBarListElement key={category.label} label={category.label} sale={category.sale} isNew={category.new} />)
              })
            }
          </div>
          <a rel="noreferrer noopener" target="_self" href="https://www.falabella.com.pe/falabella-pe" className={style.sideBarDesktopBrandLogo}>
            <img className="TaxonomyDesktop-module_logo__15yuB" src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/bltd2c33100e8cd1b5f/62c733c26a8fb133b0ff6a45/logo-falabella-menu.svg" alt="falabella" />
          </a>
        </div>
      </div>
      <div className="mt-[59px] bg-white h-screen rounded-tr-[20px]">hola</div>
    </div>
  )
}