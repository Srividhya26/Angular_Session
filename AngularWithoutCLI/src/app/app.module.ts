
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NumberDirective } from './number.directive';
import { EmailDirective } from './email.directive';
import { DateDirective } from './date.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    NumberDirective,
    EmailDirective,
    DateDirective
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}