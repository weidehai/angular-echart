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
    if (index - 1 > low) {
      main(low, index);
    }
    if (index + 1 < high) {
      main(index + 1, high);
    }
    return input;
  }
  return main(0, input.length - 1);
}

export function insertOrder(input: Array<number>, callback?: Function) {
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0; j--) {
      if (input[j] < input[j - 1]) {
        [input[j], input[j - 1]] = [input[j - 1], input[j]];
        callback && callback(input);
      } else {
        break;
      }
    }
  }
  return input;
}

export function hillSort(
  input: Array<number>,
  step: number,
  callback?: Function
) {
  let group = Math.floor(input.length / step);
  let tail = input.length % step;
  for (let i = 0; i < group; i++) {
    for (let j = i + step - 1; j < input.length; j += step - 1) {
      for (let k = j; k - step + 1 > 0; k -= step - 3) {
        if (input[k] < input[k - step + 1]) {
          [input[k], input[k - step + 1]] = [input[k - step + 1], input[k]];
          callback && callback(input);
        } else {
          break;
        }
      }
    }
  }
  if (tail) {
    for (let i = input.length - tail + 1; i < input.length; i++) {
      for (let j = i; j > input.length - tail; j--) {
        if (input[j] < input[j - 1]) {
          [input[j], input[j - 1]] = [input[j - 1], input[j]];
          callback && callback(input);
        } else {
          break;
        }
      }
    }
  }
  if (group === 0) return input;
  hillSort(input, step * 2, callback);
  return input;
}

export function multipleOrder(input: Array<number>, callback?: Function) {
  let group: Array<Array<number>> = [];
  input.forEach((item) => {
    group.push([item]);
  });
  function main(group: Array<Array<number>>):Array<number> {
    let result: Array<Array<number>> = [];
    if(group.length <= 1) return group[0];
    for (let i = 0; i < group.length; i += 2) {
      let g1 = group[i];
      let g2 = group[i + 1];
      let _group = []
      if(!g2 && g1) {result.push(g1);break; }
      while (true) {
        let g1Head = g1[0];
        let g2Head = g2[0];
        if (g1Head && g2Head) {
          if(g1Head<g2Head){
            _group.push(g1.shift());
          }else{
            _group.push(g2.shift());
          }
        } else if (!g1Head && g2Head) {
          _group.push(g2.shift());
        } else if (g1Head && !g2Head) {
          _group.push(g1.shift());
        } else {
          break;
        }
      }
      result.push(<Array<number>>_group)
    }
    callback && callback(result.flat());
    return main(result)
  }
  return main(group);
}

export function stackSort(input: Array<number>, callback?: Function) {}
