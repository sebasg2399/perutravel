import { RouteProps } from "react-router-dom";

export type CustomRoute = RouteProps & {
  name: string;
  navbar?: boolean;
  backgroundImage: string;
};
