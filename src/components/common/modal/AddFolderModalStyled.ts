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
  padding: 20px;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
`;

export const FormModal = styled.form``;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;
