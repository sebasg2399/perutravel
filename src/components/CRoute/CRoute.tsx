import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { CustomRoute } from "~/models/CustomRoute.interface";

export const CRoute: React.FC<CustomRoute> = ({ ...props }) => {
  useEffect(() => {
    console.log("first");
  }, []);
  return (
    <React.Fragment>
      <Route {...props} />
    </React.Fragment>
  );
};
