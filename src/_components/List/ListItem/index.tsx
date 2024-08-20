import "./listItem.css";
import React from "react";

interface ListItemProps {
  title: string;
  description: string;
  people: number;
  dragStartHandler?: (event: React.DragEvent) => void;
}

const ListItem = ({
  title,
  description,
  people,
  dragStartHandler,
}: ListItemProps) => {
  return (
    <li onDragStart={dragStartHandler} draggable>
      <h2>{title}</h2>
      <h3>{`${people} ${people === 1 ? "Person" : "Persons"} assigned`}</h3>
      <p>{description}</p>
    </li>
  );
};

export default ListItem;
