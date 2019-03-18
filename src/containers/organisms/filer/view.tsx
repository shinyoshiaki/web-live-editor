import React, { FC } from "react";
import { Props as parent } from "../../../components/molecules/filer/filetree";
import FileTree from "../../../components/molecules/filer/filetree";

export interface Props extends parent {
  height?: string;
}

const FilerView: FC<Props> = props => {
  const { height } = props;
  return (
    <div style={{ width: 250 }}>
      <div style={{ background: "#F0F0F0", padding: 10 }}>
        {"file manager".toUpperCase()}
      </div>
      <div
        style={{
          height: height || "auto",
          background: "#F6F9FC",
          padding: 10,
          maxWidth: 250,
          overflow: "scroll"
        }}
      >
        <FileTree {...props} />
      </div>
    </div>
  );
};

export default FilerView;
