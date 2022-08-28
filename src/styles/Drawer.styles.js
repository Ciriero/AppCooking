import styled from "styled-components";

export const LibraryContainer = styled.div`
  position: fixed;
  height: 70%;
  margin-top: 6rem;
  width: 20%;
  background-color: #809a6f;
  transform: ${(props) =>
    props.libraryStatus ? "translate(0%)" : "translate(-100%)"};
  transition: 0.7s all ease-in-out;
  padding: 1rem;
  z-index: 10;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width: 90%;
    z-index: 3334;
  }
`;

export const Button = styled.div`
  color: #ffd24c;
  top: 0;
  position: fixed;
  font-size: 2rem;
  margin: 2rem;
  width: 2rem;
  cursor: pointer;
  z-index: 4444;
  @media screen and (max-height: 768px) {
    font-size: 1.5rem;
    position: fixed;
    margin: 1rem;
    width: 3rem;
    z-index: 4444;
  }
`;

export const DrawBtn = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  font-family: "Courier New", Courier, monospace;
  background-color: #e6b325;
  color: #a91079;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ImgDraw = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
  img {
    width: 3rem;
    height: 3rem;
    border: 1px solid green;
    cursor: pointer;
  }
  p {
    font-family: "Courier New", Courier, monospace;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    font-weight: 600;
  }
`;
