
import { useRef } from 'react'
import style from './NavBar.module.css'

interface props {
    openSideBar: () => void
    showSideBar: Boolean
}

export default function MenuButton({ openSideBar, showSideBar }: props) {

    const ref = useRef<HTMLSpanElement>(null)
    const handleClick = () => {
        const icon = ref.current
        icon?.classList.toggle(style.active)
        openSideBar()
    }
    return (
        <button onClick={handleClick} className="flex items-center gap-2 hover:bg-orange-500 px-4 py-2 rounded" >
            <div className="relative">
                <span ref={ref} className={`${style.hamburgerIcon} ${showSideBar ? style.active : null}`}></span>
            </div>
            <span className="capitalize font-bold text-2xl">menu</span>
        </button>
    )
}