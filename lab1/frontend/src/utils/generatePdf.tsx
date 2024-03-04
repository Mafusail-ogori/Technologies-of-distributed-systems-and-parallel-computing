import { TimeResult } from "../models/TimeResult";
import jsPDF from "jspdf";

export const generatePdf = (timeResults: TimeResult[]) => {
  const doc = new jsPDF();
  doc.text(
    `${timeResults.map(
      (timeResult: TimeResult) =>
        `Calculation time for ${timeResult.threadAmount} thread/s is ${timeResult.time} seconds \n`
    )}`,
    10,
    10
  );
  doc.save("multithreading.pdf");
};
