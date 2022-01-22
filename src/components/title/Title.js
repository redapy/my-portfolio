import { Border, Header, Wrapper } from "./Ttitle.styles";

const Title = ({title}) => {
    return ( 
        <Wrapper>
            <Header>{title}</Header>
            <Border />
        </Wrapper>
     );
}
 
export default Title;