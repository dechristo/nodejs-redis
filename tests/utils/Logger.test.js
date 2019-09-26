import { Logger } from './../../dist/utils/Logger';
const assert = require('assert');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Logger', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('info()', () => {
        it('should call console.info one time', () => {
            const spy = sinon.spy(console, 'info');
            Logger.info('unit testing!');
            assert(spy.calledOnce);
        })
    });

    describe('error()', () => {
        it('should call console.info one time', () => {
            const spy = sinon.spy(console, 'error');
            Logger.error('Error in unit testing!');
            assert(spy.calledOnce);
        })
    });
});