import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="w-full">
      <BeatLoader
        color="#45C6B1"
        loading={loading}
        width="100%"
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
