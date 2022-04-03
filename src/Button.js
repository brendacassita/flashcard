import styled, { css } from "styled-components";
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from "./Styles";

const Button = styled.button`
padding: 5px 20px;
border-radius: 10px;
border: 1px solid white;
margin: 10px;
background-color: ${PRIMARY_COLOR};
color: white;
flex-direction: column;
align-items: center;
justify-content: center;

&: hover{
    background-color: ${PRIMARY_DARK_COLOR};
    cursor: crosshair;

}
${(props)=> 
props.outline && css`
background-color: #212534;
color: ${PRIMARY_COLOR};
border: 10px solid ${PRIMARY_COLOR};
&: hover{
    background-color:${PRIMARY_COLOR};
    color:white;
    cursor:crosshair;
}
`
}


`
export default Button