import {
  LibraryContainer,
  Button,
  DrawBtn,
  ImgDraw,
} from "../styles/Drawer.styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavContext from "../FavContext";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [libraryStatus, setlibraryStatus] = useState(false);
  const navigate = useNavigate();
  const { favorites } = useContext(FavContext);

  const handleFav = () => {
    navigate("/fav");
    setlibraryStatus(false);
  };

  useEffect(() => {
    localStorage.setItem("favrecipe", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Button onClick={() => setlibraryStatus(!libraryStatus)}>
        {!libraryStatus ? <AiOutlineMenu /> : <AiOutlineClose />}
      </Button>

      <LibraryContainer libraryStatus={libraryStatus}>
        {/* <h2>FAVS</h2> */}
        <DrawBtn onClick={handleFav}>Favourites</DrawBtn>
        {favorites &&
          favorites.map((item) => (
            <ImgDraw key={item.id}>
              <Link
                to={`/details/${item.id}`}
                onClick={() => setlibraryStatus(!libraryStatus)}
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </Link>
            </ImgDraw>
          ))}
      </LibraryContainer>
    </>
  );
};

export default Drawer;
