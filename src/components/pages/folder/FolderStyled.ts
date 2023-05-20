import styled from "styled-components";

export const Section = styled.section`
  padding: 10px;
`;

export const PhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* width: 100%; */
  padding: 30px;
`;

export const PhotoEl = styled.li`
  flex-basis: calc((100% - 30px) / 4);
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadBtn = styled.button`
  cursor: pointer;

  background-color: var(--blue_Photos);
  border: 1px solid var(--btn_border);
  padding: 5px 10px;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--hover_Btn);
    box-shadow: 0px 8px 18px 3px rgba(0, 0, 0, 0.5);
  }
`;
