import { WordcountDirective } from './wordcount.directive';

describe('WordcountDirective', () => {
  it('should create an instance', () => {
    const directive = new WordcountDirective(null!);
    expect(directive).toBeTruthy();
  });
});
