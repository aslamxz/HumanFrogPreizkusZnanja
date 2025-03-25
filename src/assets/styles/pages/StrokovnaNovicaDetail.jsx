import React from "react";
import { useParams } from "react-router-dom";

const StrokovnaNovicaDetail = () => {
  let { id } = useParams(); // Get dynamic ID from URL

  return (
    <div>
      <h1>Strokovna Novica Detail</h1>
      <p>Showing details for news ID: {id}</p>
    </div>
  );
};

export default StrokovnaNovicaDetail;
