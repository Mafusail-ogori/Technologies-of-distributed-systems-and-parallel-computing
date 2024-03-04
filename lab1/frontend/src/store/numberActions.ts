import { AppDispatch } from ".";
import axios from "axios";
import { TimeResult } from "../models/TimeResult";
import { numberActions } from "./numberSlice";

export const sendNumbersData = (numbers: number[]) => {
  return async (dispatch: AppDispatch) => {
    const sendNumbers = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/user/manual`,
          JSON.stringify({ numbers: numbers }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return {
          timeResults: response.data.timeResults,
          numbers: response.data.sortedArray,
        };
      } catch (error) {
        throw new Error(`Error sending numbers data ${error}`);
      }
    };
    try {
      const result = await sendNumbers();
      const timeResults: TimeResult[] = result.timeResults;
      const sortedArray: number[] = result.numbers;

      dispatch(
        numberActions.setStatus({
          status: timeResults ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: timeResults,
        })
      );
      dispatch(numberActions.setNumbers({ numbers: sortedArray }));
    } catch (error) {
      throw new Error(`Sending numbers error ${error}`);
    }
  };
};

export const sendAmountData = (amount: number) => {
  return async (dispatch: AppDispatch) => {
    const sendAmount = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/user/auto`,
          JSON.stringify({ amount: amount }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return {
          timeResults: response.data.timeResults,
          numbers: response.data.sortedArray,
        };
      } catch (error) {
        throw new Error(`Error sending amount data ${error}`);
      }
    };
    try {
      const result = await sendAmount();
      const timeResults: TimeResult[] = result.timeResults;
      const sortedArray: number[] = result.numbers;

      dispatch(
        numberActions.setStatus({
          status: timeResults ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: timeResults,
        })
      );
      dispatch(numberActions.setNumbers({ numbers: sortedArray }));
    } catch (error) {
      throw new Error(`Sending amount error ${error}`);
    }
  };
};

export const sendFileData = (file: any) => {
  return async (dispatch: AppDispatch) => {
    const sendFile = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file[0]);
        const response = await axios.post(
          `http://localhost:8080/user/file`,
          formData
        );
        return {
          timeResults: response.data.timeResults,
          numbers: response.data.sortedArray,
        };
      } catch (error) {
        throw new Error(`Error sending file data ${error}`);
      }
    };
    try {
      const result = await sendFile();
      const timeResults: TimeResult[] = result.timeResults;
      const sortedArray: number[] = result.numbers;

      dispatch(
        numberActions.setStatus({
          status: timeResults ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: timeResults,
        })
      );
      dispatch(numberActions.setNumbers({ numbers: sortedArray }));
    } catch (error) {
      throw new Error(`Sending file error ${error}`);
    }
  };
};
