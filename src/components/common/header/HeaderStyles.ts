import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 0 19px 0;
  width: 100%;
  border-bottom: 1px solid var(--light_gray);
`;

export const LogoSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const AddFolderBtn = styled.button`
  padding: 10px 25px;
  margin-right: 20px;
  background-color: var(--white_BG);
`;
