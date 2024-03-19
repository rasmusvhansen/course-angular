import { EmphasizePipe } from './emphasize.pipe';

describe('Emphasize pipe', () => {
  let pipe: EmphasizePipe;
  beforeEach(() => {
    pipe = new EmphasizePipe();
  });

  it('should emphasize "shark" as default', () => {
    expect(pipe.transform('There is a shark in the water')).toBe(
      'There is a ***SHARK*** in the water',
    );
  });

  it('should emphasize given word', () => {
    expect(pipe.transform('There is a shark in the water', 'water')).toBe(
      'There is a shark in the ***WATER***',
    );
  });

  it('should be case insensitive', () => {
    expect(pipe.transform('There is a shark in the Water', 'wAtEr')).toBe(
      'There is a shark in the ***WATER***',
    );
  });
});
