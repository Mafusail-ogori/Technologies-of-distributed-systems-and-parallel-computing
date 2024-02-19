import classes from "./WrapperCard.module.css";

export const WrapperCard: React.FC<{ children: any }> = ({ children }) => {
  return <div className={classes["card-container"]}>{children}</div>;
};
