import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiBull } from "react-icons/gi";
import { List, SLink } from "../styles/Category.styles";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Spanish"}>
        <GiBull />
        <h4>Spanish</h4>
      </SLink>
    </List>
  );
};

export default Category;
