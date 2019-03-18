import React, { FunctionComponent } from "react";
import _ from "lodash";

export interface Props {
  file: (label: string, path: string) => any;
  folder: (label: string, path: string) => any;
  paths: string[];
}

function parsePath(paths: string[]) {
  const dirs = paths.map(path => {
    const dir: any = {};
    const arr = path.split("/");
    arr.reduce((o, s, i) => {
      if (i === arr.length - 1) return (o[arr[i - 1]] = [s]);
      else return (o[s] = {});
    }, dir);
    return dir;
  });
  const filesystem = {};
  dirs.forEach(dir => {
    _.mergeWith(filesystem, dir, (a, b) => {
      if (_.isArray(a)) {
        return b.concat(a);
      }
    });
  });
  console.log({ filesystem });
  return filesystem;
}

const Traverse: FunctionComponent<{
  file: (label: string, path: string) => any;
  folder: (label: string, path: string) => any;
  dirs: any;
  path: string;
}> = ({ file, folder, dirs, path }) => {
  const keys = Object.keys(dirs);
  const slash = () => (path !== "" ? "/" : "");
  return (
    <div style={{ paddingLeft: 20 }}>
      {keys.map(key => {
        const data: any = dirs[key];
        console.log({ data });
        return (
          <div key={key}>
            {_.isArray(data) ? (
              data.map(
                (str: any) =>
                  str.length > 0 && (
                    <div key={str}>{file(str, path + slash() + str)}</div>
                  )
              )
            ) : (
              <div>
                <div>{folder(key, path + slash() + key)}</div>
                <Traverse
                  file={file}
                  folder={folder}
                  dirs={data}
                  path={path + slash() + key}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const TreeView: FunctionComponent<Props> = ({ file, folder, paths }) => {
  return (
    <div>
      <Traverse file={file} folder={folder} dirs={parsePath(paths)} path="" />
    </div>
  );
};

export default TreeView;
