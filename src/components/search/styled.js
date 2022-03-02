import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
`
export const Content = styled.div`
display:flex;
flex-direction:row;
gap:1rem;
`
export const IconBox = styled.button`
display:flex;
justify-content:center;
align-items:stretch;
width:70px;
height:59px;

background: #1C2C44;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 8px;
cursor: pointer;

transition: all .3s ease;

&:hover {
    filter: brightness(1.5);
    transform: scale(1.1);
}


`;

export const Label = styled.label`
display:flex;
flex-direction:column;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
color: #484A4C;

`