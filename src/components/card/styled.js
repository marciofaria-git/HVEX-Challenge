import styled from 'styled-components'

export const DisplayUser = styled.div`
display:flex;
width:634px;
height:184px;
align-items:center;
padding:2rem;
gap: 1rem;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`
export const UserName = styled.div`
font-family: Roboto;
align-items: baseline;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #484A4C;
margin-bottom:1rem;
`
export const UserRepo = styled.div`
display:flex;
justify-content: center;
align-items: baseline;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #484A4C;
`

export const UserFrom = styled.div`
display:flex;
font-family: Roboto;
font-style: normal;
align-items: baseline;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #484A4C;
margin-bottom:9px;

`
export const UserBio = styled.div`
display:flex;
flex-direction:row;
font-family: Roboto;
align-items: baseline;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #484A4C;
margin-bottom:9px;
`
export const UserProfile = styled.div`
display:flex;
flex-direction: column;
width:80%;

`

export const UserLink = styled.a`
cursor:pointer;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #484A4C;
border-bottom: 1px solid #000000;
width: 87px;
height: 16px;

`

export const UserAvatar = styled.img`
display:flex;

justify-content: center;
width:133px;
height:133px;



border: 6px solid #1C2C44;
border-radius: 65px;
overflow: hidden;
`
export const Container = styled.div`
display:flex;
justify-content:space-between;
`

export const Content = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #484A4C;

`