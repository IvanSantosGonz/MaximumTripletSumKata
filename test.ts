import {maxTriSum} from "./index";
import { expect } from 'chai';

describe('empty array', () => {
    it('should return 0', () => {
        const result = maxTriSum([]);
        expect(result).to.equal(0);
    });
});

describe('three no repeated numbers', () => {
    it('should return the sum of them', () => {
        const result = maxTriSum([1, 2, 3]);
        expect(result).to.equal(6);
    });
});

describe('more than three no repeated numbers', () => {
    it('should return the sum of the three biggest', () => {
        const result = maxTriSum([1, 2, 3, 4]);
        expect(result).to.equal(9);
    });
});

describe('more than three with repeated numbers', () => {
    it('should return the sum of the three biggest non repeated numbers', () => {
        const result = maxTriSum([1, 2, 3, 4, 4]);
        expect(result).to.equal(9);
    });
});



describe('more than three with repeated numbers and negative ones', () => {
    it('should return the sum of the three biggest non repeated numbers', () => {
        const result = maxTriSum([-1, -2, 3, -4, 4]);
        expect(result).to.equal(6);
    });
});