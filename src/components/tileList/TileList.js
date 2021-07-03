import React from "react";
import { Tile } from "../tile/Tile";
import PropTypes from "prop-types";

export const TileList = (props) => {
  return (
    <div>
      {props.data.map((data) => (
        <Tile data={data} key={data.name || data.title} />
      ))}
    </div>
  );
};

TileList.propTypes = {
  props: PropTypes.array,
};
