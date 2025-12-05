import { useState, useEffect } from "react";

export default function Counting({
    from, to, duration, separator,
}: { from: number; to: number; duration: number; separator?: string }) {
    const [count, setCount] = useState(from)

    useEffect(() => {
        if (count === to) return

        const increment = (to - from) / (duration * 60)
        const timer = setInterval(() => {
        setCount((prev) => {
            const next = prev + increment
            return next >= to ? to : next
        })
        }, 1000 / 60)

        return () => clearInterval(timer)
    }, [count, to, from, duration])

    return <>{separator && count > 999 ? count.toLocaleString() : Math.floor(count)}</>
}