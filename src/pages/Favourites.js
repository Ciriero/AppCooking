import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import FavContext from "../FavContext";
import Swal from "sweetalert2";

import {
  Gridfav,
  HeaderFav,
  InputFav,
  MsgError,
  MsgNotResult,
} from "../styles/Favourites.styles";

const Favourites = () => {
  const { favorites } = useContext(FavContext);
  const { setFavorites } = useContext(FavContext);
  const [term, setTerm] = useState("");
  const [dbTerm, setDbTerm] = useState(favorites);

  useEffect(() => {
    localStorage.setItem("favrecipe", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const filtered = dbTerm.filter((value) => {
        return value.title.toLowerCase().includes(term.toLowerCase());
      });
      setFavorites(filtered);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7DCE13",
      cancelButtonColor: "#EB1D36",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      const delteFilm = favorites.filter((item) => item.id !== id);
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setFavorites(delteFilm);
        setDbTerm(delteFilm);
      }
    });
  };

  return (
    <>
      <HeaderFav>
        <h3>YOUR FAVS</h3>

        <div>
          <InputFav
            type="text"
            placeholder="Debounce your favs..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          {!favorites.length && !dbTerm.length ? (
            <div>
              <MsgError>Not favourites yet</MsgError>
            </div>
          ) : null}
        </div>
      </HeaderFav>

      <Gridfav>
        {favorites &&
          favorites.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </Gridfav>
      <div></div>
      {favorites.length === 0 && dbTerm.length >= 1 ? (
        <MsgNotResult>{`Not results for "${term}"`}</MsgNotResult>
      ) : null}
    </>
  );
};

export default Favourites;
