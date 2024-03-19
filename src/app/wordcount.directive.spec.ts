import { WordcountDirective } from './wordcount.directive';
import { ElementRef, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Word count directive', () => {
  let directive: WordcountDirective;

  beforeEach(() => {});

  it('should write the number of words in the title', () => {});
});

/* ------------------- Using Angular Testbed --------------- */

@Component({
  template: ` <div appWordcount>This div has many words</div> `,
  standalone: true,
})
class TestWordcountDirectiveComponent {}

describe('Word count directive with testbed', () => {
  let fixture: ComponentFixture<TestWordcountDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WordcountDirective, TestWordcountDirectiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWordcountDirectiveComponent);
    fixture.detectChanges();
  });

  it('should count the words in the element it is attached to', () => {
    // use fixture.debugElement.query(By.css('div')) to get reference to element
  });
});
