import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "../styles/Cuisine.styles";
import CuisineItem from "./CuisineItem";
import ReactPaginate from "react-paginate";
import "../Css - Pagination/Paginations.css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const { country } = useParams();

  useEffect(() => {
    getCuisine(country);
  }, [country]);

  const getCuisine = async (country) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${country}&number=27`
    );
    setCuisine(data.results);
  };

  const usersPerPage = 9;
  const pagesVisited = currentPage * usersPerPage;

  const indexOfFirstItem = pagesVisited + usersPerPage;
  const currentItems = cuisine
    .slice(pagesVisited, indexOfFirstItem)
    .map((item) => {
      return <CuisineItem key={item.id} item={item} />;
    });

  const pageCount = Math.ceil(cuisine.length / usersPerPage);

  const changePage = ({ selected }) => {
    setcurrentPage(selected);
  };

  return (
    <Grid>
      {currentItems}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Grid>
  );
};

export default Cuisine;
