

import { useState } from "react"

export default function useLoginModal() {

    const [showLoginModal, setShowLoginModal] = useState(false)

    const openLoginModal = () => {
        setShowLoginModal(true)
    }
    const closeLoginModal = () => {
        setShowLoginModal(false)
    }

    return { showLoginModal, openLoginModal, closeLoginModal }

}