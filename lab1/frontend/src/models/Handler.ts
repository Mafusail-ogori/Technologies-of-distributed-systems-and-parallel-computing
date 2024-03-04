import { ChangeEvent } from "react";

export type Handler = {
  onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onNumbersChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDrop: any;
  pickedFileName: string;
};
