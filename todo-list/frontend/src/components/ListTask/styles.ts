import styled from 'styled-components';

export const Container = styled.div`
position:relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 37px;
  border-radius: 5px;
  background-color: red;
  line-height: 37px;
  margin-top: 10px;
  background-color: #f6f7f8;
  span {
    margin:0 20px;
  }
  select {
    width: auto;
    height: 30px;
  }
  @media(max-width: 630px){
    display: flex;
    flex-direction: column;
    align-items:center;
    height:auto;
    padding-bottom: 15px;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  gap: 10px;

  @media(max-width: 630px){
    display: flex;
    margin: 0 auto;
    gap: 5px
      }

`;

export const ButtonEdit = styled.div`
  background-color: green;
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
`;
export const ButtonDel = styled.div`
  background-color: red;
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
`;
export const EditWindowns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputWindows = styled.input`
  background: #f6f7f8;
  width: 50%;
  height: 30px;
  border: none;
  outline: 0;
  display: inline-block;
  position: absolute;
  z-index: 3;
  left: 10px;
  @media(max-width: 857px){
    width: 30%;
  }
  @media(max-width: 630px){

    width: 90%;
    top: 5px;
    ::placeholder,
  ::-webkit-input-placeholder {
    text-align:center;
  }
  :-ms-input-placeholder {
    text-align:center;
  }
  }
`;