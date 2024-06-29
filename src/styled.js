import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Responsive grid with minimum item width of 200px */
  gap: 20px;
`;

export const Header = styled.header`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  max-width: fit-content;
  margin: 5px auto 25px auto;
  text-align: center;
  border: 1px solid darkgrey;
  border-radius: 5px;
  padding: 10px 25px;
  background-color: lightgrey;

  @media (max-width: 680px) {
    font-size: 1.5rem;
  }

  @media (max-width: 380px) {
    font-size: 1rem;
  }
  @media (max-width: 270px) {
    font-size: 0.8rem;
  }
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
