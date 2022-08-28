import {
  WrapIntro,
  TitleIntro,
  IntroWrapper,
  IntroMove,
  Letters,
  TitleIntro2,
} from "../styles/Intro.styles";

const Intro = () => {
  return (
    <WrapIntro>
      <div>
        <TitleIntro>Delicious</TitleIntro>
        <IntroWrapper>
          <IntroMove>
            <Letters>Italian</Letters>
            <Letters>American</Letters>
            <Letters>Thai</Letters>
            <Letters>Spanish</Letters>
            <Letters>Popular</Letters>
          </IntroMove>
        </IntroWrapper>
        <TitleIntro2>Recipes</TitleIntro2>
      </div>
    </WrapIntro>
  );
};

export default Intro;
