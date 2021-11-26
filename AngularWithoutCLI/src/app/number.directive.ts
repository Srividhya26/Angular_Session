import { NgIf } from "@angular/common";
import { Directive, ElementRef, OnInit ,Input, HostListener } from "@angular/core";

@Directive({
    selector : '[number]'
})

export class NumberDirective implements OnInit{

    @Input() lengthValue = '';
    private regex : RegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    phoneValidation = true;

    constructor(private ele : ElementRef){
        
    }
      
    ngOnInit(){
       this.ele.nativeElement.value = this.lengthValue;
    }

    
    @HostListener('keyup') onkeyup(){
        this.phoneValidation = this.regex.test(String(this.ele.nativeElement.value).toLowerCase());

        if(!this.phoneValidation){
            this.ele.nativeElement.style.border = "solid red 2px";
        }

        else{
            this.ele.nativeElement.style.border = "solid green 2px";
        }
    }

   
}

