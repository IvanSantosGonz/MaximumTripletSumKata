export function maxTriSum(numbers: number[] = []): number {
     let sum: number = 0;
     [...new Set(numbers)].sort((n1, n2) => n2 - n1).slice(0, 3).forEach(n => sum += n);
     return sum
}

