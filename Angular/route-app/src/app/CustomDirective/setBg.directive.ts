import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector : '[setBgBlue]',
})

export class setBgDirective implements OnInit {

    constructor(private element : ElementRef){

    }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = "#5d7e9d"
    }


}