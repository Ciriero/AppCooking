import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 9rem 0rem;
  position: absolute;
  top: -5rem;
  width: 100%;
  z-index: 3333;
  @media screen and (max-width: 768px) {
    top: -6rem;
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #5f7161, #a0bcc2);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    width: 4rem;
    height: 4rem;
  }

  h4 {
    color: white;
    font-size: 0.7rem;
    margin-top: 0.5rem;
    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
