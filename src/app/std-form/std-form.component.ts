import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { iform } from '../models/model';




@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fnameval!:string;
  lnameval!:string;
  emailval!:string;
  contactval!:string;
  @Output()addinfo:EventEmitter<iform>=new EventEmitter<iform>()
  
  constructor() { }
  

  ngOnInit(): void {
    
  }
  onstudent(){
    let obj:iform={
      fname:this.fnameval,
      lname:this.lnameval,
      email:this.emailval,
      contact:+this.contactval
    }
    console.log(obj)
    this.addinfo.emit(obj)
    
    
  }
  
  
  
  


}



