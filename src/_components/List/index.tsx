import { ProjectInput } from "../../_utils/interfaces.ts";
import ListItem from "./ListItem";
import "./list.css";

interface ListProps {
  items: ProjectInput[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.length > 0 &&
        items.map((item: ProjectInput, id: number) => (
          <ListItem
            key={id}
            title={item.title}
            description={item.description}
            people={item.people}
          />
        ))}
    </ul>
  );
};

export default List;
