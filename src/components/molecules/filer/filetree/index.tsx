import React, { FunctionComponent } from "react";
import TreeView from "./tree";
import FileItem from "./file";
import FolderItem from "./folder";

export interface Props {
  paths: string[];
  onCreate: (s: string) => void;
}

const FileTree: FunctionComponent<Props> = ({ paths, onCreate }) => {
  return (
    <div>
      <TreeView
        paths={paths}
        file={label => <FileItem label={label} />}
        folder={(label, path) => (
          <FolderItem label={label} newItem={onCreate} path={path} />
        )}
      />
    </div>
  );
};

export default FileTree;
