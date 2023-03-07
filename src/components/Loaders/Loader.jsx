import React from "react";
import { BarLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="absolute top-13 left-0 w-full">
      <BarLoader
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

export default Loader;
