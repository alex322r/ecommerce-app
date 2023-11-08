'use client'
import Link from "next/link"
import MenuButton from "./MenuButton"
import SearchBar from "./SearchBar"
import { BsCart3 } from "react-icons/bs"
import LoginButton from "./LoginButton"
import SideBar from "./SideBar"
import useSideBar from "../hooks/useSideBar"
import usePopOver from "../hooks/usePopOver"
import style from "./NavBar.module.css"


export default function NavBar({ openLoginModal, showLoginModal }: { openLoginModal: () => void, showLoginModal: boolean }) {
  const { showSideBar, openSideBar, closeSideBar } = useSideBar()
  const { showPopOver, openPopOver, closePopOver } = usePopOver()

  const handleOnMouseOver = (e: React.SyntheticEvent) => {
    closePopOver()
  }

  return (
    <nav onMouseOver={handleOnMouseOver} className=' bg-orange-400 md:bg-orange-600'>
      <ul className="flex flex-col md:flex-row w-full text-white">
        <div className="flex flex-row">
          <li className="bg-orange-600 rounded-r-full md:rounded-none md:bg-orange-400 flex flex-col order-2 md:order-1 flex-none text-lg md:text-2xl font-bold md:rounded-tr-full md:rounded-br-full">
            <Link className="px-3 py-3 md:px-6 md:py-5" href='/'>Ecommerce.com</Link>
          </li>
          <li className="bg-orange-600 flex flex-none order-1 md:order-2 items-center">
            <MenuButton showSideBar={showSideBar} openSideBar={openSideBar} />
            {
              showSideBar && <SideBar closeSideBar={closeSideBar} />
            }
          </li>
          <li className="bg-orange-400 order-3 list-item md:hidden">
            <ul className="h-full">
              <div className="h-full">
                <li className="h-full">
                  <p className="flex items-center  underline font-bold mr-1 text-[#33363d] h-full text-sm leading-4 ">
                    Inicia sesion
                  </p>
                </li>
                <li></li>
              </div>
            </ul>
          </li>
        </div>

        <li className="flex items-center flex-auto mr-6">
          <SearchBar />
        </li>
        <li className="flex-none hidden md:list-item ">
          <div className="flex h-full">
            <ul className="flex font-bold text-lg items-center">
              <li className="flex items-center relative h-4/6 border-r-[.5px] border-gray-300">
                <div className="">
                  <LoginButton openLoginModal={openLoginModal} showPopOver={showPopOver} openPopOver={openPopOver} closePopOver={closePopOver} />
                </div>
              </li>

              <li className=" hover:text-orange-300 px-4 py-2  h-4/6 border-r-[.5px] border-gray-300">
                <a href="#">Mis compras</a>
              </li>
              <li className=" hover:text-orange-300 px-4 py-2 h-4/6 text-3xl">
                <a href="#">
                  <BsCart3 />
                </a>
              </li>
            </ul>
          </div>
        </li>

      </ul>
      {
        showPopOver && <div className={style.popOverOverlay} onMouseOver={closePopOver} ></div>
      }

    </nav >

  )
}

