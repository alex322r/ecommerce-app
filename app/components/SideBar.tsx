/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import style from "./SideBar.module.css"
import sideBarCategories from "../mocks/sidebarCategories.json"
import appStyle from "../App.module.css"
import SideBarListElement from "./SideBarListElement"
import SideBarList from "./SideBarList"

interface props {
  closeSideBar: () => void
}

interface SideBarCategories {
  label: string
  icon: string
  sale: boolean
  new: boolean
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
    setSideBarTranslateCompleted(true)

    return () => {
      $body?.classList.remove(appStyle.HamburguerBtnNavigationOpen)
      $body?.removeChild($overlay)
      $overlay.removeEventListener("click", closeSideBar)
    }
  }, [closeSideBar])

  const [showContent, setShowContent] = useState(false)
  const [content, setContent] = useState<SideBarCategories>({
    label: "",
    icon: "",
    sale: false,
    new: false
  })
  const [sideBarTranslateCompleted, setSideBarTranslateCompleted] = useState(false)

  const handleOnMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowContent(true)
    selectContent(e.currentTarget)
  }

  const selectContent = (element: HTMLDivElement) => {
    const content = sideBarCategories.find(category => {
      return category.label === element.dataset.label

    })
    if (!content) return
    setContent(content)
  }



  return (
    <div className={`${style.sideBarDesktop} ${sideBarTranslateCompleted ? style.completed : ''}`} >
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
                return (<SideBarListElement key={category.label} handleOnMouseOver={handleOnMouseOver} label={category.label} icon={category.icon} sale={category.sale} isNew={category.new} />)
              })
            }
          </div>
          <a rel="noreferrer noopener" target="_self" href="https://www.falabella.com.pe/falabella-pe" className={style.sideBarDesktopBrandLogo}>
            <img className="TaxonomyDesktop-module_logo__15yuB" src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/bltd2c33100e8cd1b5f/62c733c26a8fb133b0ff6a45/logo-falabella-menu.svg" alt="falabella" />
          </a>
        </div>
      </div>
      {showContent && <SideBarList content={content} />}

    </div>
  )
}