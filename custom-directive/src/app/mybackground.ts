import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[my-background]'
}) 

export class MyBackground {
    constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'red';
        el.nativeElement.style.background = 'yellow';
    }

}