'use client'

import LoginModal from "./LoginModal";
import { useEffect } from "react";

interface props {
    closeLoginModal: () => void
}

export default function LoginModalOverlay({ closeLoginModal }: props) {
    useEffect(() => {
        const $body = document.querySelector("body")
        if ($body !== null) {
            $body.style.overflow = "hidden"
        }
        const removeOverflow = () => {
            if ($body !== null) {
                $body.style.overflow = ""
            }
        }

        return () => removeOverflow()

    }, [])


    return (
        <div onClick={closeLoginModal} className="flex z-50 top-0 right-0 items-center justify-center fixed w-full h-screen bg-black bg-opacity-60" >
            <LoginModal closeLoginModal={closeLoginModal} />
        </div>
    )
}
