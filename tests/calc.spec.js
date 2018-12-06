import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {

    describe('Smoke Tests', () => {
        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });
        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });
        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });
        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 10 when `sum(6, 4)`', () => {
            expect(sum(6, 4)).to.be.equal(10);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(20, 16)`', () => {
            expect(sub(20, 16)).to.be.equal(4);
        });
        it('should return the negative value -110 when `sub(10, 120)`', () => {
            expect(sub(10, 120)).to.be.equal(-110);
        });
    });

    describe('Mult', () => {
        it('should return 1000 when `mult(4, 250)`', () => {
            expect(mult(4, 250)).to.be.equal(1000);
        });
    });

    describe('Div', () => {
        it('should return 50 when `div(150, 3)`', () => {
            expect(div(150, 3)).to.be.equal(50);
        });
        it('should return `Its not possible division by zero` when `div(20, 0)`', () => {
            expect(div(20, 0)).to.be.equal('Its not possible division by zero');
        });
    });
});
