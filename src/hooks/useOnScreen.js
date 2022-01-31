import { useState, useEffect, useRef} from 'react';
import { useWindowSize } from './useWindowSize';

const useOnScreen = (options) => {

    const wrapperRef = useRef(null)
    const [isvisible, setIsvisible] = useState(false)

    const fadeIn = entries => {
        const [entry] = entries;
        setIsvisible(entry.isIntersecting);
    }

    const { width } = useWindowSize()

    useEffect(() => {
        const observer = new IntersectionObserver(fadeIn, options)
        if (width <= 720) {
            observer.disconnect()
            setIsvisible(true)
        } else {
            const current = wrapperRef.current
            if (current) observer.observe(current)
            
            return () => {
                if (current) observer.unobserve(current)
            }
        }

    }, [options, wrapperRef, width])

    return [isvisible, wrapperRef]
}
 
export default useOnScreen;