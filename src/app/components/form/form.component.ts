import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Display }  from 'src/app/models/display';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   
  newDisplay = new Display(0,'','','',0,0, new Date())
  @Output() Quote = new EventEmitter<Display>();
  gallery: any;

  
  submitQuote(){
    
    this.Quote.emit(this.newDisplay)
    this.newDisplay = new Display(0,'','','',0,0,new Date())
   console.log('winning') 
  
  }
  
  constructor() { }
 

  ngOnInit(): void {
  }

}
