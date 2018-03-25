import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageAdjust]'
})
export class ImageAdjustDirective {

  constructor(private el: ElementRef) {
    this.addClass();
  }

  addClass(){
    let img = this.el.nativeElement;
    let finalClass;

    img.onload = () => {
      if (img.clientWidth >= img.clientHeight){
        finalClass = 'image--landscape';
      } else if (img.clientWidth < img.clientHeight){
        finalClass = 'image--portrait';
      }
      img.classList.remove('image--landscape', 'image--portrait');
      img.classList.toggle(finalClass);
    };
  }
}

