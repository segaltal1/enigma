import { useEffect, useRef } from "react"

export const useUpdateEffect = (cb, deps) => {
    const isMounted = useRef(false)
    useEffect(() => {
        if (isMounted.current) {
            cb()
        } else {
            isMounted.current = true
        }
        // eslint-disable-next-line
    }, deps)
}