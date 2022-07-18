import styled from 'styled-components/native';
import logo from '../../assets/pencil.svg';
import open from '../../assets/open.svg';


export const Container = styled.View`
display: flex;
flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height:70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  
  
`
export const Title = styled.Text`
font-size: 30px;
color: ${props => props.theme.colors.white}
`
export const Img = styled.Image`
width: 50px;
height: 50px;
background-color: white;
color:white;
`
export const Div = styled.View`
width: 50px;
height: 50px;
background-color: ${({ theme }) => theme.colors.primaryLight};
border-radius: 10px;

`
export const Logo = styled(logo)`
  fill:${({ theme }) => theme.colors.white};
`

export const Open = styled(open)`

margin: 5px 8px;

fill:${({ theme }) => theme.colors.black};
`