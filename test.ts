import {maxTriSum} from "./index";
import { expect } from 'chai';

describe('empty array', () => {
    it('should return 0', () => {
        const result = maxTriSum([]);
        expect(result).to.equal(0);
    });
});

describe('three not  repeated numbers', () => {
    it('should return the sum of them', () => {
        const result = maxTriSum([1, 2, 3]);
        expect(result).to.equal(6);
    });
});