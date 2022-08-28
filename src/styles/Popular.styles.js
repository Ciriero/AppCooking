import styled from "styled-components";

export const Envolt = styled.div`
  height: 25rem;
  margin: 2rem;
  margin-bottom: 15rem;
  flex-grow: 1;
`;

export const Popula = styled.p`
  text-align: center;
  margin: 4rem 0rem;
  letter-spacing: 0.3rem;
`;

export const Card = styled.div`
  display: flex;
  height: 30rem;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-height: 768px) {
    height: 20rem;
    margin: 3rem;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ReceipeName = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.3rem;
  color: green;
`;
