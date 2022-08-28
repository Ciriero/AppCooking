import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterCotainer = styled.footer`
  padding: 1.5rem;
  min-height: 15vh;

  text-align: center;
  background-color: #809a6f;
  color: #fff;
  letter-spacing: 0.3rem;
  @media screen and (max-width: 768px) {
    margin-right: -0.9rem;
  }
`;

export const FooterText = styled.h4`
  font-size: 0.8rem;
  letter-spacing: 0.4rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Icons = styled(Link)`
  margin: 1rem;
  color: black;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover:nth-child(1) {
    color: #3b5998;
  }
  &:hover:nth-child(2) {
    color: #00acee;
  }
  &:hover:nth-child(3) {
    color: #e4405f;
  }

  svg {
    &:hover {
      transform: scale(1.3);
      transition: 0.4s all ease;
    }
  }
`;
