import "./listItem.css";
import React from "react";
import Button from "../../Button";

interface ListItemProps {
  title: string;
  description: string;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dragStartHandler?: (event: React.DragEvent) => void;
}

const ListItem = ({
  title,
  description,
  dragStartHandler,
  onClickHandler,
}: ListItemProps) => {
  return (
    <li onDragStart={dragStartHandler} draggable>
      <Button className="delete" name="&#10006;" onClick={onClickHandler} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default ListItem;
