import { ProjectInput } from "../../../_utils/interfaces.ts";
import "./listItem.css";

const ListItem = ({ title, description, people }: ProjectInput) => {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{people}</p>
    </li>
  );
};

export default ListItem;
