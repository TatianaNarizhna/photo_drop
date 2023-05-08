import styled from "styled-components";

export const FolderWrapper = styled.section`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Folder = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 15px;
  }
  padding: 15px;
  width: 100%;
  border: 1px solid var(--light_gray);
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  margin: 0 0 0 30px;
`;

export const FolderText = styled.p`
  color: var(--black);
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: 22px;
  right: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: var(--white);
`;
