import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[weatherBackground]'
})
export class WeatherBackgroundDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }

}