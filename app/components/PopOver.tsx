'use client'

interface props {
  closePopOver: () => void
  openLoginModal: () => void
}

import { useEffect } from "react"
import style from "./PopOver.module.css"

export default function PopOver({ closePopOver, openLoginModal }: props) {
  useEffect(() => {
    const $body = document.querySelector("body")
    $body?.classList.add(style.noOverlayScroll)
    return () => $body?.classList.remove(style.noOverlayScroll)
  }, [])

  const handleClick = () => {
    console.log(openLoginModal)
    openLoginModal()
    closePopOver()
  }

  return (
    <div className={style.popOver}>
      <div>
        <ul>
          <li>
            <button onClick={handleClick}>Inicia sesion</button>
          </li>
          <li>
            <a href="#">Registrate</a>
          </li>
          <li>
            <a href="#">Mi cuenta</a>
          </li>
          <li>
            <a href="#">CARD Puntos</a>
          </li>
        </ul>
      </div>
    </div>
  )
}