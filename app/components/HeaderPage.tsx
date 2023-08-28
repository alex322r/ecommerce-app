import Link from "next/link"
import NavBar from "./NavBar"

export default function HeaderPage({ showLoginModal, openLoginModal }: { showLoginModal: boolean, openLoginModal: () => void }) {
  return (
    <header>
      <NavBar showLoginModal={showLoginModal} openLoginModal={openLoginModal} ></NavBar>
    </header>
  )
}