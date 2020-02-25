export function maxTriSum(numbers: number[] = []): number {
     let sum: number = 0;
     numbers.forEach(n => sum += n)
     return sum
}

