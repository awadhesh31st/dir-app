import { DirProps } from "../../types/dir";

export const DirMockData: DirProps = {
  id: 1,
  name: "root",
  type: "folder",
  items: [
    {
      id: 11,
      name: "component",
      type: "folder",
      items: [
        {
          id: 111,
          name: "File.tsx",
          type: "file",
        },
        {
          id: 112,
          name: "Folder.tsx",
          type: "file",
        },
      ],
    },
    {
      id: 12,
      name: "mock",
      type: "folder",
      items: [
        {
          id: 121,
          name: "dir-Mock.tsx",
          type: "file",
        },
      ],
    },
    {
      id: 13,
      name: "public",
      type: "folder",
      items: [],
    },
    {
      id: 1,
      name: "src",
      type: "folder",
      items: [],
    },
  ],
};
