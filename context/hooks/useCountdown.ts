import { useEffect, useState } from 'react'

export function useCountDown(seconds: number) {
    const [sec, setSec] = useState(seconds);
    useEffect(() => {
        const timeSec = setInterval(() => {
            if (sec > 0) {
                setSec(prevState => prevState - 1)
            } else {
                setSec(seconds)
            }
        }, 1000)
        return () => clearInterval(timeSec)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sec])
    const minu_sec = `${`0${Math.floor(sec / 60)}`.slice(-2)}:${`0${sec - Math.floor(sec / 60) * 60}`.slice(-2)}`
    return {sec, minu_sec};
}