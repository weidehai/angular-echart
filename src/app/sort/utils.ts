export function parseData(input: Array<number>) {
  return input.map((item) => {
    return {
      value: item,
      label: {
        position: 'top',
        show: true,
      },
    };
  });
}
