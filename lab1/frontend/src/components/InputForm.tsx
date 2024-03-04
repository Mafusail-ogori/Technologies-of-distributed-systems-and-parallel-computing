import { WrapperCard } from "../ui/wrappers/WrapperCard";
import { RadioGroupContainer } from "../ui/radio/RadioGroup";
import { radioData } from "../data/radioData";
import { InputSwitcher } from "./InputSwitcher";
import { ChangeEvent, FormEvent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import { Handler } from "../models/Handler";
import { WorkScenario } from "../models/RadioScenarios";
import { AppDispatch, RootState, useAppDispatch } from "../store";
import {
  sendAmountData,
  sendFileData,
  sendNumbersData,
} from "../store/numberActions";
import { TimeResult } from "../models/TimeResult";
import { useSelector } from "react-redux";
import { ChartFlow } from "./ChartFlow";
import classes from "./InputForm.module.css";

import jsPDF from "jspdf";
import { generatePdf } from "../utils/generatePdf";

export const InputForm = () => {
  const [scenario, setScenario] = useState<string>("manual");
  const [pickedFileName, setPickedFileName] =
    useState<string>("No file picked");
  const [droppedFile, setDroppedFile] = useState<any>(null);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [amount, setAmount] = useState<number>(0);

  const dispatch: AppDispatch = useAppDispatch();

  const timeResults: TimeResult[] = useSelector(
    (state: RootState) => state.numbers.timeResults
  );

  const scenarioClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setScenario(event.target.value);
  };

  const manualInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const numbers: number[] = event.target.value.split(",").map((chunk) => {
      return +chunk;
    });
    setNumbers(numbers);
  };

  const amountInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setPickedFileName(acceptedFiles[0].path);
    setDroppedFile(acceptedFiles);
  }, []);

  const handlers: Handler = {
    onAmountChange: amountInputChangeHandler,
    onNumbersChange: manualInputChangeHandler,
    onDrop: onDrop,
    pickedFileName,
  };

  const submitClickHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch (scenario) {
      case WorkScenario.Manual: {
        dispatch(sendNumbersData(numbers));
        break;
      }
      case WorkScenario.Auto: {
        dispatch(sendAmountData(amount));
        break;
      }
      case WorkScenario.File: {
        dispatch(sendFileData(droppedFile));
        break;
      }
    }
  };

  const exportToPDFButtonClickHandler = () => {
    generatePdf(timeResults);
  };

  return (
    <WrapperCard onSubmit={submitClickHandler}>
      <RadioGroupContainer
        radioData={radioData}
        onChange={scenarioClickHandler}
      />
      <InputSwitcher radioScenario={scenario} handlers={handlers} />
      <Button type="submit" variant="contained">
        SUBMIT
      </Button>
      <div className={classes["graph-container"]}>
        {timeResults.length > 0 ? (
          <ChartFlow timeResults={timeResults} />
        ) : null}
      </div>
      {timeResults.length > 0 ? (
        <>
          <h1>Acquired time results : </h1>
          {timeResults.map((timeResult: TimeResult) => (
            <h3 key={timeResult.threadAmount}>
              Calculation time on {timeResult.threadAmount} thread/s is{" "}
              {timeResult.time.toString().slice(0, 5)} seconds
            </h3>
          ))}
          <Button onClick={exportToPDFButtonClickHandler} variant="contained">
            Export to PDF
          </Button>
        </>
      ) : null}
    </WrapperCard>
  );
};
