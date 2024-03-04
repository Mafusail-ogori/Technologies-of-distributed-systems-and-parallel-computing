import { Worker } from "worker_threads";
import { mergeChunks } from "./sort.js";

function multiThreadedQuickSort(arr, numWorkers) {
  return new Promise((resolve, reject) => {
    const chunkSize = Math.ceil(arr.length / numWorkers);
    const workerPool = [];
    let mergedSortedChunks = [];

    for (let i = 0; i < numWorkers; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, arr.length);
      const worker = new Worker("./utils/worker.js", {
        workerData: { arr: arr.slice(start, end) },
      });

      worker.on("message", (message) => {
        mergedSortedChunks.push(message.sortedChunk);
        if (mergedSortedChunks.length === numWorkers) {
          const sortedArray = mergeChunks(mergedSortedChunks);
          resolve(sortedArray);
        }
      });

      worker.on("error", (error) => {
        reject(error);
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });

      workerPool.push(worker);
    }
  });
}

export default multiThreadedQuickSort;
