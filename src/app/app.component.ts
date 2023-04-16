
import { Component } from '@angular/core';
import { iform } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';

  stdArray:Array<iform>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"knv@gmail",
      contact:123456
    }
    
  ]
  onstudentinfo(eve:iform){
    console.log(eve)
    this.stdArray.push(eve)
  }
  


 



     
  }


