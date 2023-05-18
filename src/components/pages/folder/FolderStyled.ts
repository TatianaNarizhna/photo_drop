import styled from "styled-components";

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
