import React, { useState } from "react";
import { ProjectInput } from "../../_utils/types.ts";
import ListItem from "../../_assets/List/ListItem";
import List from "../../_assets/List";

interface ProjectsListProps {
  items: ProjectInput[];
  onItemDrop: (item: ProjectInput, targetList: string) => void;
  sectionId: string;
  deleteProject: (id: string) => void;
}

const ProjectsList = ({
  items,
  onItemDrop,
  sectionId,
  deleteProject,
}: ProjectsListProps) => {
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
    onItemDrop(droppedItem, sectionId);
  };

  return (
    <List
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={
        "list list--droppable " + `${draggedOver ? "list--drop " : ""}`
      }
    >
      {items.length > 0 &&
        items.map((item: ProjectInput, id: number) => (
          <ListItem
            key={id}
            title={item.title}
            description={item.description}
            dragStartHandler={(event) => onDragStart(event, item)}
            onClickHandler={() => deleteProject(item.id)}
          />
        ))}
    </List>
  );
};

export default ProjectsList;
