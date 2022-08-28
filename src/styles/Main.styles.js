import styled from "styled-components";

export const Env = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  @media screen and (max-height: 768px) {
    height: 120vh;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -33;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: -10;
`;
