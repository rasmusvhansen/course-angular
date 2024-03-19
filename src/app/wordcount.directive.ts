import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWordcount]',
  standalone: true,
})
export class WordcountDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.element.nativeElement.title = `Contains ${this.element.nativeElement.innerText.split(' ').length.toString()} word(s)`;
  }
}
