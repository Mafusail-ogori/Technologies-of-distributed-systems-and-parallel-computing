import generator from "../utils/randomGenerator.js";
import { timeResults } from "../utils/timeResults.js";

class UserController {
  async calculateUserManual(req, res) {
    try {
      const array = req.body.numbers;
      const singleThreadResult = await timeResults(array, 1);
      const fourThreadResult = await timeResults(array, 4);
      const eightThreadResult = await timeResults(array, 8);
      const sixteenThreadResult = await timeResults(array, 16);
      res.status(200).json({
        timeResults: [
          singleThreadResult,
          fourThreadResult,
          eightThreadResult,
          sixteenThreadResult,
        ],
        sortedArray: sixteenThreadResult.sortedNumbers,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "execution failure" });
    }
  }

  async calculateUserAuto(req, res) {
    try {
      const array = generator(req.body.amount);
      const singleThreadResult = await timeResults(array, 1);
      const fourThreadResult = await timeResults(array, 4);
      const eightThreadResult = await timeResults(array, 8);
      const sixteenThreadResult = await timeResults(array, 16);
      res.status(200).json({
        timeResults: [
          singleThreadResult,
          fourThreadResult,
          eightThreadResult,
          sixteenThreadResult,
        ],
        sortedArray: sixteenThreadResult.sortedNumbers,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "execution failure" });
    }
  }
  async calculateUserFile(req, res) {
    try {
      const fileContent = req.file.buffer.toString("utf8");
      const numbersArray = fileContent.match(/\d+/g).map(Number);
      const singleThreadResult = await timeResults(numbersArray, 1);
      const fourThreadResult = await timeResults(numbersArray, 4);
      const eightThreadResult = await timeResults(numbersArray, 8);
      const sixteenThreadResult = await timeResults(numbersArray, 16);
      res.status(200).json({
        timeResults: [
          singleThreadResult,
          fourThreadResult,
          eightThreadResult,
          sixteenThreadResult,
        ],
        sortedArray: sixteenThreadResult.sortedNumbers,
      });
      res.status(200);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "execution failure" });
    }
  }
}

export default new UserController();
