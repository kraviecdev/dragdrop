import { ProjectInput } from "../../_utils/interfaces.ts";
import ListItem from "./ListItem";
import "./list.css";
import React, { useState } from "react";

interface ListProps {
  items: ProjectInput[];
  onItemDrop: (item: ProjectInput, targetList: "active" | "finished") => void;
  targetList: "active" | "finished";
}

const List = ({ items, onItemDrop, targetList }: ListProps) => {
  const [draggedOver, setDraggedOver] = useState(false);

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDraggedOver(true);
  };

  const onDragLeave = () => {
    setDraggedOver(false);
  };

  const onDragStart = (event: React.DragEvent, item: ProjectInput) => {
    event.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDraggedOver(false);

    const droppedItem: ProjectInput = JSON.parse(
      event.dataTransfer.getData("application/json"),
    );
    onItemDrop(droppedItem, targetList);
  };

  return (
    <ul
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={draggedOver ? "droppable" : ""}
    >
      {items.length > 0 &&
        items.map((item: ProjectInput, id: number) => (
          <ListItem
            key={id}
            title={item.title}
            description={item.description}
            people={item.people}
            dragStartHandler={(event) => onDragStart(event, item)}
          />
        ))}
    </ul>
  );
};

export default List;
