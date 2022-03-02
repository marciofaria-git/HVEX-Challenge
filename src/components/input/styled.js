import styled from 'styled-components'

export const InputForm = styled.input`
width: 546px;
height: 59px;

background: #FFFFFF;
border: ${props => props.inputBorder || "1px solid #C4C4C4"};
box-sizing: border-box;
border-radius: 8px;

padding:28px;

font-size:18px;
`