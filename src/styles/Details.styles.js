import styled from "styled-components";

export const WrapperBack = styled.div`
  background: url(${(props) => props.detalles});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  opacity: 0.5;
  width: 100%;
  z-index: -1;
  position: absolute;
`;

export const Center = styled.div`
  position: relative;
  width: 80%;
  min-height: calc(100vh - 926px - 115px);
  /* height: 120vh; */
  background-color: #fff;
  margin: 0 auto;
  margin-top: 25rem;
  padding: 2rem;

  @media screen and (max-height: 768px) {
    margin-top: 20rem;
  }
`;

export const WrapperDetail = styled.div`
  display: flex;

  margin-top: 5rem;
  /* border: 1px solid black; */
  min-height: 100vh;
  background: url(${(props) => props.detalles});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-height: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
    font-style: italic;
    margin-bottom: 2rem;
    @media screen and (max-height: 768px) {
      margin-top: -5rem;
      font-size: 1.5rem;
    }
  }

  img {
    border: 1px solid black;
    @media screen and (max-height: 768px) {
      width: 15rem;
      height: 12rem;
    }
  }
`;

export const Buttons = styled.button`
  border: 2px solid #babd42;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 5rem;
  padding: 1rem;
  background-color: ${(props) => (props.active ? "#babd42" : "white")};
  @media screen and (max-height: 768px) {
    margin-left: -1rem;
    margin-bottom: 1.4rem;
  }
`;

export const InfoButtons = styled.div`
  margin-left: 5rem;
  margin-top: 2rem;

  p,
  ul {
    padding: 0.5rem;
    font-size: 1.1rem;
    margin-top: 1rem;
    width: 100%;
    letter-spacing: 0.1rem;
    @media screen and (max-height: 768px) {
      height: 100%;
      margin-bottom: 5rem;
      margin-left: -3rem;
    }
  }
`;

export const BtnBack = styled.button`
  margin: 1rem 0rem;
  padding: 0.8rem;
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  text-decoration: underline;
  background-color: #babd42;
  transition: 0.4s all ease;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #babd42;
    text-decoration: none;
    border: 1px solid #babd42;
  }
`;

export const Btnfav = styled.button`
  position: absolute;
  margin-top: 1rem;
  right: 2rem;
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  background-color: #f8cb2e;
  color: #006e7f;
  border: none;
`;
