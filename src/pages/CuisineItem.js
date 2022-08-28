import { Link } from "react-router-dom";
import { Veil } from "../styles/Cuisine.styles";

const CuisineItem = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`}>
      <Veil>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </Veil>
    </Link>
  );
};

export default CuisineItem;
