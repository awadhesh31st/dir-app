import { render, screen } from "@testing-library/react";
import { FileComponent } from "../../components/File";

describe("FileComponent", () => {
  it("renders the file name correctly", () => {
    const testName = "example.txt";
    render(<FileComponent name={testName} />);
    const fileNameElement = screen.getByTestId("file-name");
    expect(fileNameElement).toHaveTextContent(testName);
  });

  it("renders the file icon", () => {
    render(<FileComponent name="example.txt" />);
    const fileIconElement = screen.getByTestId("file-icon");
    expect(fileIconElement).toBeTruthy();
  });
});
