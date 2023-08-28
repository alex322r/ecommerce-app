'use client'
import useLoginModal from "../hooks/useLoginModal"
import NavBar from "./NavBar"
import LoginModalOverlay from "./LoginModalOverlay"

export default function HeaderPage() {
  const { showLoginModal, closeLoginModal, openLoginModal } = useLoginModal()
  return (
    <>
      <header>
        <NavBar showLoginModal={showLoginModal} openLoginModal={openLoginModal} ></NavBar>
      </header>
      {
        showLoginModal && <LoginModalOverlay closeLoginModal={closeLoginModal} />
      }
    </>

  )
}