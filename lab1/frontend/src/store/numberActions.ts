import { AppDispatch } from ".";
import axios from "axios";
import { TimeResult } from "../models/TimeResult";
import { numberActions } from "./numberSlice";

export const sendNumbersData = (numbers: number[]) => {
  return async (dispatch: AppDispatch) => {
    const sendData = async () => {
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
        return response.data.timeResults;
      } catch (error) {
        throw new Error(`Error sending numbers data ${error}`);
      }
    };
    try {
      const response: TimeResult[] = await sendData();
      dispatch(
        numberActions.setStatus({
          status: response ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: response,
        })
      );
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
        return response.data.timeResults;
      } catch (error) {
        throw new Error(`Error sending amount data ${error}`);
      }
    };
    try {
      const response: TimeResult[] = await sendAmount();
      dispatch(
        numberActions.setStatus({
          status: response ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: response,
        })
      );
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
        return response.data.timeResults;
      } catch (error) {
        throw new Error(`Error sending file data ${error}`);
      }
    };
    try {
      const response: TimeResult[] = await sendFile();
      dispatch(
        numberActions.setStatus({
          status: response ? true : false,
        })
      );
      dispatch(
        numberActions.setResultTime({
          timeResults: response,
        })
      );
    } catch (error) {
      throw new Error(`Sending file error ${error}`);
    }
  };
};
