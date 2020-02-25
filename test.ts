import {maxTriSum} from "./index";
import { expect } from 'chai';

describe('empty array', () => {
    it('should return 0', () => {
        const result = maxTriSum([]);
        expect(result).to.equal(0);
    });
});