import React from "react";

interface ListProps {
  onDragOver: (event: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (event: React.DragEvent) => void;
  className?: string;
  children?: React.ReactNode;
}

const List = ({
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  children,
}: ListProps) => {
  return (
    <ul
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={className}
    >
      {children}
    </ul>
  );
};

export default List;
