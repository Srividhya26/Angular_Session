import { Component, Input } from "@angular/core";

@Component({
    selector : 'parent-root',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentComponent{
    email = {
        name: '',
        length : '',
        date : ''
    }

    isValid = true;
    DateValid(event: any){
      this.isValid = event
    }

}