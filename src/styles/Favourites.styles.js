import styled from "styled-components";

export const Gridfav = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  margin: 5rem 5rem 8rem 7rem;

  img {
    position: relative;
    border-radius: 2rem;
    transition: 0.2s all ease;
    width: 20rem;
    height: 15rem;
  }

  p {
    font-size: 1rem;
    width: 30%;
    margin: 0.3rem;
    font-family: "Courier New", Courier, monospace;
  }

  button {
    padding: 0.2rem;
    cursor: pointer;
    color: red;
    border: 1px solid red;
    background-color: #fff;
    transition: 0.3s all ease;
    &:hover {
      color: #fff;
      background-color: red;
    }
  }
`;

export const HeaderFav = styled.div`
  text-align: center;
  margin-top: 7rem;
  h3 {
    font-family: "Courier New", Courier, monospace;
    font-size: 3rem;
    color: #809a6f;
  }
`;

export const InputFav = styled.input`
  outline: none;
  padding: 1rem;
  width: 40rem;
  margin-top: 2rem;
  border: 3px solid #809a6f;
  font-size: 1rem;
  color: #2a0944;
  &::placeholder {
    font-size: 1rem;
    font-family: "Courier New", Courier, monospace;
  }
  @media screen and (max-height: 768px) {
    width: 20rem;
  }
`;

export const MsgError = styled.p`
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 15rem;
  letter-spacing: 0.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #395b64;
`;

export const MsgNotResult = styled.p`
  font-size: 2rem;
  margin-bottom: 10rem;
  text-align: center;
  letter-spacing: 0.4rem;
  color: #355764;
`;
