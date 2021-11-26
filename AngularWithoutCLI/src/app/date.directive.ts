import { NgIf } from "@angular/common";
import { Directive, ElementRef, OnInit ,Input, HostListener,Output, EventEmitter } from "@angular/core";

@Directive({
    selector : '[date]'
})

export class DateDirective implements OnInit{

    dateValidation : boolean = true;
    transformedDate !: string;
    date !: number;
    month !: number;
    year !: number;

    @Output() dateValue = new EventEmitter<boolean>();

    constructor(private ele : ElementRef){
      
    }

    ngOnInit(){
       
    }

    @HostListener('keyup') onkeyup() {

        this.changeDateFormat(this.ele.nativeElement.value);                                                          
    
      }

    changeDateFormat(date : any){
        const regex = /^[0-9]*$/;
        this.dateValidation = regex.test(String(date).toLowerCase());
        

        this.date = date.slice(0,2);
        this.month = date.slice(2,4);
        this.year = date.slice(4,8);

        
        if(date.length == 8 && date.length != 0 && this.dateValidation == true){
            if(this.date > 31){
                this.ele.nativeElement.style.border = "solid red 2px";
                this.dateValidation = false;
            }
            
            else if(this.month > 12){
                this.ele.nativeElement.style.border = "solid red 2px";
                this.dateValidation = false;
            }

            else
            {
                this.transformedDate =  date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8);
                this.ele.nativeElement.style.border = "solid green 2px";
                this.ele.nativeElement.value = this.transformedDate;
                this.dateValidation = true;

            }

        }

        else
        {
            this.ele.nativeElement.style.border = "solid red 2px";
            this.dateValidation = false;
        }

        this.dateValue.emit(this.dateValidation);
        console.log(this.dateValidation);

    }

}