import { Wrapper } from "./Projects.styles";
import data from '../../data'
import { useMemo } from "react";
import useOnScreen from '../../hooks/useOnScreen';
import CardsList from "../cardsList/CardsList";
import Title from "../title/Title";

const Projects = () => {
    // Set intersection observer for the wrapper
    const optionsMemo = useMemo(() => (
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    ), []);
    const [isvisible, wrapperRef] = useOnScreen(optionsMemo);
    return ( 
        <Wrapper ref={wrapperRef} id='projects'>
            {isvisible && <Title title='MY PROJECTS' isvisible={isvisible}/>}
            {isvisible && <CardsList projects={data} isvisible={isvisible}/>}
        </Wrapper>
     );
}
 
export default Projects;