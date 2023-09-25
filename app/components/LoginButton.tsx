'use client'

import style from "./NavBar.module.css"

interface props {
    showPopOver: boolean
    openPopOver: () => void
    closePopOver: () => void
    openLoginModal: () => void
}


import PopOver from "./PopOver"
export default function LoginButton({ showPopOver, openPopOver, closePopOver, openLoginModal }: props) {

    const handleOnMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        openPopOver()
    }

    return (
        <div onMouseOver={handleOnMouseOver}>
            <div className={style.loginButton}>
                Inicia Sesion
            </div>
            {showPopOver && <PopOver openLoginModal={openLoginModal} closePopOver={closePopOver} />}
        </div>
    )
}