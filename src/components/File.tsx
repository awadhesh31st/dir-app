import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { NameProps } from "../../types/dir";

export const FileComponent: React.FC<NameProps> = ({ name }) => {
  return (
    <div className="file-section">
      <span data-testid="file-icon" className="file">
        <FaFileAlt />
      </span>
      <span data-testid="file-name" className="file-name">{name}</span>
    </div>
  );
};
