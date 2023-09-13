export interface NameProps {
  name?: string;
}
export interface DirProps extends NameProps {
  id?: number;
  type?: "folder" | "file";
  items?: DirProps[];
}
