import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 37px;
  border-radius: 5px;
  line-height: 37px;
  margin-top: 10px;
  background-color: #f6f7f8;
  font-family: 'Economica', sans-serif;
  .edit-Input {
    background: #f6f7f8;
    width: 50%;
    height: 30px;
    border: none;
    outline: 0;
    display: inline-block;
    position: absolute;
    z-index: 3;
    left: 20px;
    bottom: 2px;
    padding: 0px;
    font-family: 'Economica', sans-serif;
    font-size: 1.2rem;
    @media (max-width: 857px) {
      width: 90%;
      top: -16px;
      left: 28px;
      text-align: center;
      font-size: 1.2rem;
    }
    @media (max-width: 630px) {
      width: 90%;
      top: -16px;
      left: 13px;
      text-align: center;
      font-size: 1.2rem;

      ::placeholder,
      ::-webkit-input-placeholder {
        text-align: center;
      }
      :-ms-input-placeholder {
        text-align: center;
      }
    }
  }
  span {
    margin: 0 20px;
    font-family: 'Economica', sans-serif;
    font-size: 1.2rem;
  }
  .finishin {
    text-decoration: line-through;
    text-decoration-thickness: 5px;
  }
  .select-input {
    width: 130px;
    height: 30px;
    border: 1px solid black;
    border-radius: 3px;
    text-align-last: center;
  }

  .button-edit {
    background-color: green;
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    margin: 0 auto;
  }
  .button-del {
    background-color: red;
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding-bottom: 15px;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 600px) {
    display: flex;
    margin: 0 auto;
    gap: 5px;
    flex-direction: column;
    .select-input {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    margin: 0 auto;
    gap: 10px;
  }
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
