import styled from "styled-components";

export const FormSerach = styled.form`
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30%;
  display: flex;
  z-index: 1;
  @media screen and (max-height: 768px) {
    top: 25%;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  input {
    width: 50%;
    padding: 1rem 3.4rem;
    border-radius: 1rem;
    opacity: 0.7;
    background-color: #5f7161;
    /* background-color: transparent; */
    border: none;
    /* border-bottom: 3px solid #5F7161; */
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    outline: none;
    &::placeholder {
      color: white;
      font-size: 1.2rem;
      text-align: center;
    }
    @media screen and (max-height: 768px) {
      width: 150%;
    }
  }

  svg {
    position: absolute;
    left: 27%;
    top: 36%;
    color: #fff;
    @media screen and (max-height: 768px) {
      left: 10%;
    }
  }
`;
