export const range = (start: number, stop: number, step: number): number[] =>
  Array.from(
    { length: (stop - start) / step },
    (_, index: number) => start + index * step
  );
