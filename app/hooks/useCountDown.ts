
import { useEffect, useState } from 'react';

export default function useCountDown() {
    const endDay = new Date()
    endDay.setHours(23, 59, 59, 999)
    const now = new Date()
    const countDown = endDay.getTime() - now.getTime()
    const [time, setTime] = useState(getReturnValues(countDown))
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getReturnValues(countDown))
        }, 1000)
        return () => clearInterval(interval)


    }, [countDown])

    return { ...time }

}

const getReturnValues = (countDown: number) => {


    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
}


