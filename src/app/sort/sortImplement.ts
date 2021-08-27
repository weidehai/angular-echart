export function selectSort(input: Array<number>, callback?: Function) {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        [input[j], input[i]] = [input[i], input[j]];
        callback && callback(input);
      }
    }
  }
  return input;
}

export function bubbleSort(input: Array<number>, callback?: Function) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[j] > input[j + 1]) {
        [input[j + 1], input[j]] = [input[j], input[j + 1]];
        callback && callback(input);
      }
    }
  }
  return input;
}

export function quickSort(input: Array<number>, callback?: Function) {
  function getIndex(low: number, high: number) {
    let base = input[low];
    while (low < high) {
      while (input[high] > base && low < high) {
        high--;
      }
      input[low] = input[high];
      callback && callback(input);
      while (input[low] <= base && low < high) {
        low++;
      }
      input[high] = input[low];
      callback && callback(input);
    }
    input[low] = base;
    return low;
  }
  function main(low: number, high: number) {
    let index = getIndex(low, high);
    if (index-1 > low) {
      main(low, index);
    }
    if (index+1 < high) {
      main(index + 1, high);
    }
    return input;
  }
  return main(0, input.length - 1);
}
