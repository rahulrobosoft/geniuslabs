import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef, private rend:Renderer2) { }

  @HostBinding('style.width') wid:string='';

  ngOnInit(){
    this.rend.setStyle(this.elem.nativeElement,'background-color','red');
    this.rend.setStyle(this.elem.nativeElement,'color','#fff');
    this.rend.setStyle(this.elem.nativeElement,'padding','10px');
    this.rend.setAttribute(this.elem.nativeElement,'title','This is set attribute example'); 
  }

  @HostListener('mouseenter') menter(){
    this.wid = '25%';
    this.rend.setStyle(this.elem.nativeElement,'width','25%');
  }

  @HostListener('mouseleave') mleave(){
    this.wid = '100%';
    this.rend.setStyle(this.elem.nativeElement,'transition','0.5s');
  }
}
