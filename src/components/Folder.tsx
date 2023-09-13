import React, { useState } from "react";
import { FaFolder } from 'react-icons/fa'
import { DirProps } from "../../types/dir";
import { FileComponent } from "./File";

export const FolderCompoment: React.FC<DirProps> = ({
  type,
  name = "",
  items = [],
}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShow(!show);
    e.stopPropagation();
  };

  if (type === "folder") {
    return (
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          handleClick(e)
        }
        className="dir-container"
      >
        <div className="dir-section">
          <span data-testid='folder-icon' className="dir"><FaFolder/></span>
          <span data-testid="folder-name" className="name">{name}</span>
        </div>
        {show &&
          items.map((item, key) => {
            return <FolderCompoment {...item} key={key} />;
          })}
      </div>
    );
  } else {
    return <FileComponent name={name} />;
  }
};
