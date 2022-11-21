import { CardProps } from "~/models/Card.interface";
import * as Styles from "./styles";

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <Styles.CardContainer {...props}>{children}</Styles.CardContainer>;
};
Card.defaultProps = {
  size: "default",
  isLink: true,
};
