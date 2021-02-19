import mi from '../src';

process.chdir(__dirname);

describe('Message Interpolation', () => {
  it('should get Hello, World!', () => {
    const msg = `{say}, World!`;
    expect(mi(msg, { say: 'Hello' })).toMatch('Hello, World!');
  });

  it('should get A B C D E F G', () => {
    const alphabet = `{0} B {1} D {2} F G`;
    expect(mi(alphabet, ['A', 'C', 'E'])).toMatch('A B C D E F G');
  });
});
