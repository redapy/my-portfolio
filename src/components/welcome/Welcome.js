import React from 'react';
import { Content, Waves, Wrapper, Title} from './Welcome.styles';
import waves from '../../svg/wavesOpacity.svg'

const Welcome = () => {
    

    const line1 = "I'm a front-end web developer,"
    const line2 = "and my main focus is React ❤"

    return ( 
        <Wrapper>
            <Content>
                <h1>
                    Hi, My name is Reda
                    <br/>
                    {line1.split('').map((letter, index) => (
                        <Title key={letter + '_' + index} >{letter}</Title>
                    ))}<br/>
                    {line2.split('').map((letter, index) => (
                        <Title key={letter + '_' + index}  subtitle>{letter}</Title>
                    ))}
                </h1>
            </Content>
            <Waves src={waves}/>
        </Wrapper>
     );
}
 
export default Welcome