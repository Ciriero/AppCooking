import { Link } from "react-router-dom";
import { Card, ReceipeName } from "../styles/Popular.styles";

const PopularItems = ({ popular }) => {
  return (
    <>
      <ReceipeName>{popular.title}</ReceipeName>

      <Link to={`/details/${popular.id}`}>
        <Card>
          <img src={popular.image} alt="" />
        </Card>
      </Link>
    </>
  );
};

export default PopularItems;
