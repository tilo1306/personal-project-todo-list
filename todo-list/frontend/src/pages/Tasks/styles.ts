import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/logo.svg';


export const Container = styled.section`
width: 100%;
background-color: ${({ theme }) => theme.color.primary};
height: 100vh;
`;
export const Area = styled.div`
width: 700px;
min-height: 480px;
background-color: ${({ theme }) => theme.color.secondary};
border-radius: 20px ;
margin: 30px auto auto auto;
padding: 20px;

@media (max-width: 800px) {
    width: 500px;
    
  }
  @media (max-width: 600px) {
    width: 300px;
    
  }
  @media (max-width: 280px) {
    width: 250px;
    
  }
`
export const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 27px;
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;

`;
export const Title = styled.p`
  font-family: ${({ theme }) => theme.font.forum};
  font-size: 40px;
  color: ${({ theme }) => theme.color.white}

`;
export const Image = styled(Logo1)`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  fill: ${({ theme }) => theme.color.white}
`;
export const AreaTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;