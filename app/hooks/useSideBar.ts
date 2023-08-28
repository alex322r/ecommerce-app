
import { useState } from "react";


export default function useSideBar() {
    const [showSideBar, setShowSidebar] = useState(false)


    const openSideBar = () => {
        setShowSidebar(true)
    }

    const closeSideBar = () => {
        setShowSidebar(false)
    }

    return { showSideBar, openSideBar, closeSideBar }

}