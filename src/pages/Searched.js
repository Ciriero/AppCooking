import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchedItem from "./SearchedItems";
import { Grid } from "../styles/Cuisine.styles";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import { Spiner } from "../styles/SearchSpinner.styles";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const [spin, setSpin] = useState(true);
  const { name } = useParams();

  const getSearched = async (name) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`
    );
    setSearched(data.results);
    setSpin(false);
  };

  useEffect(() => {
    setInterval(() => {
      getSearched(name);
    }, 2000);
  }, [name]);

  return (
    <>
      {spin ? (
        <Spiner>
          <BounceLoader color="green" />
        </Spiner>
      ) : (
        <Grid>
          {searched.map((item) => (
            <SearchedItem key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Searched;
