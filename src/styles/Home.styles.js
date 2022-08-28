import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const IconLnk = styled(NavLink)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(35deg, #5f7161, #a0bcc2);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 9999;

  svg {
    color: red;
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
