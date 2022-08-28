import React from "react";
import { GoHome } from "react-icons/go";
import { NavHome, IconLnk } from "../styles/Home.styles";
import { Link, useNavigate } from "react-router-dom";

const IconHome = () => {
  const navigate = useNavigate();

  const goInit = () => {
    navigate("/home");
  };

  return (
    <>
      <IconLnk to="/">
        <GoHome />
      </IconLnk>
    </>
  );
};

export default IconHome;
