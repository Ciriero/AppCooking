import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FavContext from "../FavContext";

import {
  WrapperDetail,
  InfoButtons,
  Buttons,
  WrapperBack,
  Center,
  BtnBack,
  Btnfav,
} from "../styles/Details.styles";

const Details = () => {
  const [detalles, setDetalles] = useState({});
  const [active, setActive] = useState("instructions");
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToFav } = useContext(FavContext);

  const getDetails = async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setDetalles(data);
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <WrapperBack detalles={detalles.image}> </WrapperBack>
      <Center>
        <BtnBack onClick={goBack}>Back</BtnBack>
        <Btnfav onClick={() => addToFav(detalles)}>Favourites</Btnfav>
        <WrapperDetail>
          <div>
            <h2>{detalles.title}</h2>
            <img src={detalles.image} alt={detalles.title} />
          </div>
          <InfoButtons>
            <Buttons
              onClick={() => setActive("instructions")}
              active={active === "instructions"}
            >
              Intrucciones
            </Buttons>

            <Buttons
              onClick={() => setActive("ingredients")}
              active={active === "ingredients"}
            >
              Receta
            </Buttons>
            {active === "instructions" && (
              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: detalles.instructions }}
                ></p>
              </div>
            )}
            {active === "ingredients" && (
              <ul>
                {detalles.extendedIngredients.map((item) => (
                  <li key={item.id}>{item.original}</li>
                ))}
              </ul>
            )}
          </InfoButtons>
        </WrapperDetail>
      </Center>
    </>
  );
};

export default Details;
