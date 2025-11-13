export function Average (numbers) {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return numbers.length ? sum / numbers.length : 0;
}