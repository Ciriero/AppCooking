import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Category from "../components/Category";
import Cuisine from "../pages/Cuisine";
import Home from "../pages/Home";
import SearchBox from "../components/SearchBox";
import Searched from "../pages/Searched";
import Details from "../pages/Details";
import ScrollToTop from "../components/ScrollToTop";

const AppRoute = () => {
  return (
    <>
      <ScrollToTop />

      <SearchBox />
      <Category />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cuisine/:country" element={<Cuisine />} />
        <Route path="/search/:name" element={<Searched />} />
      </Routes>
    </>
  );
};

export default AppRoute;
