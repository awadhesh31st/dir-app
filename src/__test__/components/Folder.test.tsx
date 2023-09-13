import { render, screen } from "@testing-library/react";
import { FolderCompoment } from "../../components/Folder";
import { DirMockData } from "../../mock/dir-mock";
import { DirProps } from "../../../types/dir";

describe("FolderComponent", () => {
  const mock: DirProps = DirMockData;
  it("renders the folder name correctly", () => {
    render(<FolderCompoment {...mock} />);
    const fileNameElement = screen.getByTestId("folder-name");
    expect(fileNameElement).toHaveTextContent(mock?.name || "");
  });
  it("renders the folder icon", () => {
    render(<FolderCompoment {...mock} />);
    const fileIconElement = screen.getByTestId("folder-icon");
    expect(fileIconElement).toBeTruthy();
  });
});
