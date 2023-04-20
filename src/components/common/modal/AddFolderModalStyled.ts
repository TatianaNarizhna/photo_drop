import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--overlay);
`;

export const FormContainer = styled.div`
  position: absolute;
  border: 1px solid var(--light_gray);
  padding: 20px;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  border: 1px solid var(--light_gray);
  padding: 10px;
`;

export const ModalHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid var(--light_gray);
  width: 100%;
  padding: 10px 10px 15px 10px;
  margin-bottom: 40px;
`;

export const FormModal = styled.form``;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: var(--white);
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 25px;
  width: 100%;
  padding: 12px;
  background-color: var(--blue_Btn);
  color: var(--white);
  border: 1px solid var(--btn_border);
`;
