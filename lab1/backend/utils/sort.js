function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export function mergeChunks(chunks) {
  if (chunks.length === 1) {
    return chunks;
  }
  let newChunks = [];
  for (let i = 0; i < chunks.length; i += 2) {
    newChunks.push(merge(chunks[i], chunks[i + 1]));
  }
  return mergeChunks(newChunks);
}
