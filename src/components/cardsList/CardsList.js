import { Grid } from "./CardsList.styles";
import Card from "../card/Card";

const CardsList = ({projects, isvisible}) => {

    return ( 
        <Grid>
          {projects.map(project => (
              <Card 
                    key={project.id}
                    isvisible={isvisible}
                    title={project.title} 
                    link={project.link} 
                    stacks={project.stacks} 
                    image={project.image}
                    delay={project.delay}
              />
          ))}
        </Grid>
     );
}
 
export default CardsList;