import styled from "styled-components";

export const WrapIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 50%;
  text-align: center;
  top: 40%;
  color: white;
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
  }
  @media screen and (max-height: 768px) {
    top: 10rem;
  }
`;

export const TitleIntro = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const TitleIntro2 = styled.div`
  font-size: 3rem;
  margin-top: 3rem;
`;

export const IntroWrapper = styled.div`
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const IntroMove = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
`;

export const Letters = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #809a6f;
`;
