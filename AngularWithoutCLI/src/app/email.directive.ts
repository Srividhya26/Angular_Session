import { NgIf } from "@angular/common";
import { Directive, ElementRef, OnInit ,Input, HostListener } from "@angular/core";

@Directive({
    selector : '[email]'
})

export class EmailDirective implements OnInit{

    constructor(private ele : ElementRef){

    }

    ngOnInit(){
        this.ele.nativeElement.value = '';
    }

    emailValidation = true;
    private regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    @HostListener('keyup') onKeyUp(){
        this.emailValidation = this.regex.test(String(this.ele.nativeElement.value).toLowerCase());

        if(!this.emailValidation){
            this.ele.nativeElement.style.border = "solid red 2px";
        }

        else{
            this.ele.nativeElement.style.border = "solid green 2px";
        }
    }

}