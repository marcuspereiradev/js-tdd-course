var expect = require('chai').expect;
var calc = require('../src/main.js');
// import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {

    describe('Smoke Tests', () => {
        it('should exist the calc lib', () =>{
            expect(calc).to.exist;
        });
        it('should exist the method `sum`', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });
        it('should exist the method `sub`', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });
        it('should exist the method `mult`', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });
        it('should exist the method `div`', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 10 when `sum(6, 4)`', () => {
            expect(calc.sum(6, 4)).to.be.equal(10);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(20, 16)`', () => {
            expect(calc.sub(20, 16)).to.be.equal(4);
        });
        it('should return the negative value -110 when `sub(10, 120)`', () => {
            expect(calc.sub(10, 120)).to.be.equal(-110);
        });
    });

    describe('Mult', () => {
        it('should return 1000 when `mult(4, 250)`', () => {
            expect(calc.mult(4, 250)).to.be.equal(1000);
        });
    });

    describe('Div', () => {
        it('should return 50 when `div(150, 3)`', () => {
            expect(calc.div(150, 3)).to.be.equal(50);
        });
        it('should return `Its not possible division by zero` when `div(20, 0)`', () => {
            expect(calc.div(20, 0)).to.be.equal('Its not possible division by zero');
        });
    });
});
