import React, { Fragment } from "react";

const ShowData = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="text-center">{props.runNumber}</div>
      <div className="text-center">{props.name}</div>
    </Fragment>
  );
};

export default ShowData;
