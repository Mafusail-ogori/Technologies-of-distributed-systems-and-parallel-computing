import { TimeResult } from "../models/TimeResult";
import jsPDF from "jspdf";

export const generatePdf = (
  timeResults: TimeResult[],
  sortedArray: number[]
) => {
  const textOptions = { maxWidth: 180 };
  const doc = new jsPDF();
  doc.text(
    `${timeResults.map(
      (timeResult: TimeResult) =>
        `Calculation time for ${timeResult.threadAmount} thread/s is ${timeResult.time} seconds \n`
    )}`,
    10,
    10
  );
  doc.text(sortedArray.toString(), 10, 50, textOptions);
  doc.save("multithreading.pdf");
};
