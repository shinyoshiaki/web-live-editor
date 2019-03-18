import React, { FC } from "react";
import FilerView from "./view";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";

const Filer: FC<{ height?: string }> = ({ height }) => {
  return <FilerView paths={[]} onCreate={() => {}} height={height} />;
};

export default connect((state: ReduxState) => {
  return { ...state.player };
})(Filer);
