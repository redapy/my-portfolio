import { animated, config, useTrail} from 'react-spring';
import { Wrapper, List } from "./SkillsList.styles";

const SkillsList = ({isvisible}) => {
        // Animating the skills list
        const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'git', 'GitHub'];
        const skillsTrail = useTrail(skills.length, {
            from: {
                opacity:0,
                x: 20,
            },
             to: {
                 opacity: isvisible ? 1 : 0,
                 x: isvisible ? 0 : 70
             },
             config: config.stiff
        })
    return ( 
        <Wrapper>
        <h3>Technical Skills</h3>
        <List>
            {skillsTrail.map(({x, ...props}, i) => (
                <animated.li 
                    key={skills[i]}
                    style={{
                        ...props,
                        transform: x.to(x => `translate3d(${x}px, 0, 0)`)
                    }}
                >{skills[i]}</animated.li>
            ))}
        </List>
    </Wrapper>
     );
}
 
export default SkillsList;