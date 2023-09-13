import { FolderCompoment } from "./components/Folder";
import { DirMockData } from "./mock/dir-mock";

export const App = () => {
  const mockData = DirMockData;
  return (
    <div className="container">
      <FolderCompoment {...mockData} />
    </div>
  );
};
