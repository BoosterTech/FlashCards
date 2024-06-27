import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid darkgrey;
  background-color: #f7f7f7;
  border-radius: 7px;
  aspect-ratio: 2 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  ${({ $selected }) =>
    $selected &&
    `
     border: 1px solid #e03131;
     background-color: #e03131;
     color: #fff;
     font-weight: bold;
  `}

  @media (hover: hover) {
    cursor: pointer;
  }
`;
