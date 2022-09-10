import { Directive,ElementRef,HostListener } from "@angular/core";

@Directive({
    selector :'[inputFormat]'
})

export class InputFormat{
    constructor(private element : ElementRef){}
    @HostListener('blur') onblur(){
        console.log('on blur triggered',this.element)
        let eleVal = this.element.nativeElement.value;
        this.element.nativeElement.value = eleVal.toUpperCase()
    }
}