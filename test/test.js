import func from '../src';

process.chdir(__dirname);

describe('LIB_NAME', () => {
  it('should get LIB_NAME', () => {
    expect(func()).toMatch('LIB_NAME');
  });
});
