import { FooterCotainer, Icons, FooterText } from "../styles/Footer.styles";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterCotainer>
      <FooterText>Delicious Recipes Copyright &copy;</FooterText>
      <div>
        <Icons
          to={{
            pathname: "https://es-es.facebook.com/",
          }}
          target="_blank"
        >
          <BsFacebook />
        </Icons>
        <Icons
          to={{
            pathname: "https://twitter.com/?lang=en",
          }}
          target="_blank"
        >
          <BsTwitter />
        </Icons>
        <Icons
          to={{
            pathname: "https://www.instagram.com/",
          }}
          target="_blank"
        >
          <BsInstagram />
        </Icons>
      </div>
    </FooterCotainer>
  );
};

export default Footer;
