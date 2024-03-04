import multiThreadedQuickSort from "./workerPool.js";

export const timeResults = async (array, threadAmount) => {
  let startDate = performance.now();
  const sortedArray = await multiThreadedQuickSort(array, threadAmount);
  let endDate = performance.now();
  return {
    time: (endDate - startDate) / 1000,
    threadAmount: threadAmount,
    sortedNumbers: sortedArray,
  };
};
