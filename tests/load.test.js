const assert = require('assert');
const envdotjson = require('../lib/index');
const path = require('path');
const filePath = path.join(process.cwd(), '/tests/env.json');

describe('test load function', () => {
  beforeEach(() => {
    delete process.env.NODE_ENV;
    delete process.env.PORT;
    delete process.env.NAME;
  });
  it('should load default variable correctly', () => {
    envdotjson.load({ path: filePath });
    assert(process.env.PORT === '3000');
    assert(process.env.NAME === 'default');
  });

  it('should load test variable correctly', () => {
    process.env.NODE_ENV = 'tst';
    envdotjson.load({ path: filePath });
    assert(process.env.PORT === '4000');
    assert(process.env.NAME === 'tst');
  });
});