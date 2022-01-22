import { Wrapper } from "./Projects.styles";
import data from '../../data'
import { useMemo } from "react";
import useOnScreen from '../../hooks/useOnScreen';
import CardsList from "../cardsList/CardsList";

const Projects = () => {
    // Set intersection observer for the wrapper
    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        }
    ), []);
    const [isvisible, wrapperRef] = useOnScreen(optionsMemo);
    return ( 
        <Wrapper ref={wrapperRef} id='projects'>
            {isvisible && <CardsList projects={data} isvisible={isvisible}/>}
        </Wrapper>
     );
}
 
export default Projects;