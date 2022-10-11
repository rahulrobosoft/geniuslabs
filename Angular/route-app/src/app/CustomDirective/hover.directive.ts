import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') bg:string = '#5D7E9D';
  @HostBinding('style.transition') transition:string = '';


  @HostListener('mouseenter') onMouseEnter (){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#194775')
    this.bg = '#194775'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#5D7E9D')
    // this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')

    this.bg = '#5D7E9D';
    this.transition = '0.5s';

  }


  
}
