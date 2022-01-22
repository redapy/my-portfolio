import { Grid } from "./CardsList.styles";
import Card from "../card/Card";
import { config, useTrail, useTransition } from "react-spring";
import { useState } from "react";

const CardsList = ({projects, isvisible}) => {
    const [projectsList] = useState(projects);
    const projectsTransition = useTransition(isvisible, {
        from: {x: -100, y: 800, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {},
        config: config.stiff
    })
    return ( 
        <Grid>
            {projectsTransition((style, project) => (
                project ? <Card 
                    style={style}
                    title={projects[0].title} 
                    link={projects[0].link} 
                    stacks={projects[0].stacks} 
                    image={projects[0].image}/> : null
            ))}
        </Grid>
     );
}
 
export default CardsList;