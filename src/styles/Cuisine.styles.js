import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  margin: 25rem 5rem 8rem 5rem;
  @media screen and (max-height: 768px) {
    margin-top: 20rem;
  }

  img {
    position: relative;
    border-radius: 2rem;
    transition: 0.2s all ease;
    width: 70%;
    height: 70%;
  }
`;

export const Veil = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 0;
    text-align: center;
    transition: 1s all ease;
    width: 70%;
    height: 99%;
    color: white;
    padding: 2rem;
    font-size: 1.7rem;
    opacity: 0;
    border-radius: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    &:hover {
      opacity: 1;
    }
  }
`;
