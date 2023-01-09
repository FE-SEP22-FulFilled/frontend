export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const perPageOptions = ['8', '24', '40', '64'];

export const sortByOptions = [
  'Newest',
  'Oldest',
  'Low-priced',
  'High-priced',
  'Popular',
];
