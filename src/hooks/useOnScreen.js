import { useState, useEffect, useRef} from 'react';

const useOnScreen = (options) => {

    const wrapperRef = useRef(null)
    const [isvisible, setIsvisible] = useState(false)

    const fadeIn = entries => {
        const [entry] = entries;
        setIsvisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(fadeIn, options)
        const current = wrapperRef.current
        if (current) observer.observe(current)
        
        return () => {
            if (current) observer.unobserve(current)
        }
    }, [options, wrapperRef])

    return [isvisible, wrapperRef]
}
 
export default useOnScreen;