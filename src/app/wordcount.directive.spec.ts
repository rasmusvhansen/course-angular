import { WordcountDirective } from './wordcount.directive';
import { ElementRef, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Word count directive', () => {
  let directive: WordcountDirective;

  const element: ElementRef = {
    nativeElement: { innerText: 'One two three' },
  };
  beforeEach(() => {
    directive = new WordcountDirective(element);
    directive.ngAfterViewInit();
  });

  it('should write the number of words in the title', () => {
    expect(element.nativeElement.title).toBe('Contains 3 word(s)');
  });
});

/* ------------------- Using Angular Testbed --------------- */

@Component({
  template: ` <div appWordcount>This div has many words</div> `,
  imports: [WordcountDirective],
  standalone: true,
})
class TestWordcountDirectiveComponent {}

describe('Word count directive with testbed', () => {
  let fixture: ComponentFixture<TestWordcountDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordcountDirective, TestWordcountDirectiveComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestWordcountDirectiveComponent);
    fixture.detectChanges();
  });

  it('should count the words in the element it is attached to', () => {
    // use fixture.debugElement.query(By.css('div')) to get reference to element
    const element = fixture.debugElement.query(By.css('div'));
    expect(element.nativeElement.title).toBe('Contains 5 word(s)');
  });
});
