import { PowerPipe } from './power.pipe';

/// focused test, only tests with fdescribe shall executed

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it("should be default exponent 1", () => {
    const pipe = new PowerPipe();

    expect(pipe.transform(2)).toBe(2);
  });
});
