import sdk from "@stackblitz/sdk";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { Project } from "@stackblitz/sdk/typings/interfaces";

// Create the index.ts file
const code = `import moment from 'moment';

document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
`;

// Create the index.html file
const html = `<h1>I was created on <span id='time'></span></h1>`;

// Create the project payload.
const project: Project = {
  files: {
    "index.ts": code,
    "src/nest/index.ts": code,
    "index.html": html,
    "src/nest/index2.ts": code
  },
  title: "Dynamically Generated Project",
  description: "Created with <3 by the StackBlitz SDK!",
  template: "typescript",
  tags: ["stackblitz", "sdk"],
  dependencies: {
    moment: "*" // * = latest version
  }
};

const StackBlitz: FunctionComponent = () => {
  const ref = useRef<any>(undefined);

  useEffect(() => {
    sdk.embedProject(ref.current, project, {
      height: 320,
      view: "preview",
      hideExplorer: true,
      hideNavigation: true
    });
  }, [ref]);

  return (
    <div>
      stackblitz
      <div ref={ref} style={{ height: 320 }} />
    </div>
  );
};

export default StackBlitz;
