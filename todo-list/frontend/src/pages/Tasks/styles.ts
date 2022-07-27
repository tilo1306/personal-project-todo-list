import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/logo.svg';


export const Container = styled.section`
width: 100%;
background-color: ${({ theme }) => theme.color.primary};
min-height: 100vh;
padding-bottom: 50px;
.add-task{
  display: flex;
  max-width:500px;
  margin: 0 auto;
  
}
`;
export const Area = styled.div`
width: 700px;
min-height: 480px;
background-color: ${({ theme }) => theme.color.secondary};
border-radius: 20px ;
margin: 30px auto;
padding:  20px 40px;

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
  margin-bottom: 20px;
`;