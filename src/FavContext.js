import { createContext, useState } from "react";
import Swal from "sweetalert2";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favrecipe")) || []
  );

  const addToFav = (recipe) => {
    const productExist = favorites.find((item) => item.id === recipe.id);
    if (productExist) {
      return recipe;
    } else {
      Swal.fire({
        title: "Added to favourites!",
        width: 600,
        background: "#fff url(/utils/tomato.jpg)",
        padding: "3em",
        color: "#395b64",
        confirmButtonColor: "#3CCF4E",
        backdrop: `
        rgba(57, 91, 100, 0.8)
        `,
      });
      setFavorites((prevState) => [...prevState, recipe]);
    }
  };

  return (
    <FavContext.Provider
      value={{
        favorites,
        addToFav,
        setFavorites,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
// imdbID
export default FavContext;
