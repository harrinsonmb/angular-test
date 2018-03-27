import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appImageAdjust]'
})
export class ImageAdjustDirective implements OnInit{
  private img:any;

  constructor(private el: ElementRef) {
    this.img = this.el.nativeElement;
  }


  ngOnInit(): void {
    this.img.addEventListener('load', () => {
      ImageAdjustDirective.addClass(this.img);
    });
  }

  static addClass(img){
    let finalClass;
    if (img.width >= img.height){
      finalClass = 'image--landscape';
    } else if (img.width < img.height){
      finalClass = 'image--portrait';
    }
    img.classList.remove('image--landscape', 'image--portrait');
    if(finalClass){
      img.classList.toggle(finalClass);
    }
  }
}

