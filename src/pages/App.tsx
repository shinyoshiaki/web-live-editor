import React, { FunctionComponent, useState } from "react";
import Monaco from "../components/molecules/monaco";
import Filer from "../containers/organisms/filer";

const App: FunctionComponent = () => {
  return (
    <div style={{ height: "97vh", display: "flex" }}>
      <Filer height="80%" />
      <div style={{ flex: 1 }}>
        <Monaco />
      </div>
    </div>
  );
};

export default App;
