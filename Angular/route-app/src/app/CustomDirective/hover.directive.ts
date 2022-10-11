import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter (){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#194775')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#5D7E9D')
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')

  }


  
}
