import styled from "styled-components";

export const Pagination = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
    width: 80%;
    height: 40px;
  }
  li {
    margin: 2rem 2rem 0rem 0rem;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #2b2eff;
    color: #2b2eff;
    cursor: pointer;
    background-color: ${(props) =>
      props.currentPage ? "rgb(200, 165, 218)" : ""};
  }
  a {
    border: 1px solid black;
  }
`;
