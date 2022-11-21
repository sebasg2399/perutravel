import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[];
  img_url?: string;
  background_position_x?: string;
  background_position_y?: string;
  size?: "small" | "default" | "large";
  isLink?: boolean;
}