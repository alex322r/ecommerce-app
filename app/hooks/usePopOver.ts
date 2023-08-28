import { useState } from "react"

export default function usePopOver() {
    const [showPopOver, setShowPopOver] = useState(false)

    const openPopOver = () => {
        setShowPopOver(true)
    }
    const closePopOver = () => {

        setShowPopOver(false)
    }

    return { showPopOver, openPopOver, closePopOver }

}

