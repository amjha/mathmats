import { expect } from 'chai';
import { doLinesIntersect, parallelLines, perpendicularLines } from '../src/geometry'
describe('Geometry', function () {
    before(function () {
        console.log("All tests starting for 'geometry'");
    });

    it('doLinesIntersect() should return true', function () {
        let result = doLinesIntersect([0, 0], [12, 12], [12, 0], [10, 22]);
        expect(result).to.be.true;
    });

    it('doLinesIntersect() should return false', function () {
        let result = doLinesIntersect([0, 0], [12, 12], [12, 0], [24, 24]);
        expect(result).to.be.false;
    });

    it('parallelLines() should return true', function () {
        let result1 = parallelLines([0, 0], [12, 12], [12, 0], [24, 12]);
        expect(result1).to.be.true;
        let result2 = parallelLines([0, 0], [0, 12], [10, 0], [10, 12]);
        expect(result2).to.be.true;
    });

    it('parallelLines() should return false', function () {
        let result1 = parallelLines([0, 0], [12, 12], [12, 0], [10, 22]);
        expect(result1).to.be.false;
        let result2 = parallelLines([0, 0], [12, 12], [12, 0], [22, 22]);
        expect(result2).to.be.false;
    });

    it('perpendicularLines() should return true', function () {
        let result1 = perpendicularLines([0, 0], [12, 0], [5, 0], [5, 22]);
        expect(result1).to.be.true;
        let result2 = perpendicularLines([0, -1], [10, -21], [2, 0], [10, 4]);
        expect(result2).to.be.true;
    });

    it('perpendicularLines() should return false', function () {
        let result = perpendicularLines([0, 0], [0, 12], [10, 0], [10, 12]);
        expect(result).to.be.false;
    });
});