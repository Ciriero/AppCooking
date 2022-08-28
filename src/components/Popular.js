import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularItems from "./PopularItems";
import { Envolt, Popula } from "../styles/Popular.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Popular = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("spoons");
    if (check) {
      setPopulars(JSON.parse(check));
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      localStorage.setItem("spoons", JSON.stringify(data.recipes));
      setPopulars(data.recipes);
    }
  };

  return (
    <>
      <Popula>Popular</Popula>
      <Envolt>
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 500,
            breakpoints: {
              900: {
                perPage: 1,
              },
              580: {
                perPage: 1,
              },
              380: {
                perPage: 1,
              },
              280: {
                perPage: 1,
              },
            },
          }}
        >
          {populars.map((popular) => (
            <SplideSlide key={popular.id}>
              <PopularItems key={popular.id} popular={popular} />
            </SplideSlide>
          ))}
        </Splide>
      </Envolt>
    </>
  );
};

export default Popular;
