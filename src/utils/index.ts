export function CalculateFinalAverage(values: string[]) {
  const numberValues = values.map((value)=> Number(value))
  const totalSum = numberValues.reduce((acc, curr) => acc + curr, 0)
  return totalSum
}
