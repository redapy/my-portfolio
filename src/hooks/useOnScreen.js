import { useState, useEffect, useRef} from 'react';

const useOnScreen = (options) => {

    const wrapperRef = useRef(null)
    const [isvisible, setIsvisible] = useState(false)

    const fadeIn = entries => {
        const [entry] = entries
        setIsvisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(fadeIn,options)
        if (wrapperRef.current) observer.observe(wrapperRef.current)

        return () => {
            if (wrapperRef.current) observer.unobserve(wrapperRef.current)
        }
    }, [options, wrapperRef])

    return [isvisible, wrapperRef]
}
 
export default useOnScreen;