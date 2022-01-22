import { Grid } from "./CardsList.styles";
import Card from "../card/Card";

const CardsList = ({projects, isvisible}) => {

    return ( 
        <Grid>
          {projects.map(project => (
              <Card 
                    isvisible={isvisible}
                    title={project.title} 
                    link={project.link} 
                    stacks={project.stacks} 
                    image={project.image}
              />
          ))}
        </Grid>
     );
}
 
export default CardsList;