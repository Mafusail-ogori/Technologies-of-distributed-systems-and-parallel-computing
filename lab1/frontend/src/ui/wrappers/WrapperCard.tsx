import { FormEvent } from "react";
import classes from "./WrapperCard.module.css";

export const WrapperCard: React.FC<{
  children: any;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}> = ({ children, onSubmit }) => {
  return (
    <form className={classes["card-container"]} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
