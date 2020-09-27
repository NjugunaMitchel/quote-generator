import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Display }  from 'src/app/display';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  gallery:Display[]= [
    {name:'Mishel', author:'mishel', quote:'Yolo my people'},
    {name:'Mishel', author:'mishel', quote:'Yolo my people'}, 
    {name:'Mishel', author:'mishel', quote:'Yolo my people'}
    
  ]

  newDisplay = new Display('',' ',' ')
  @Output() Quote = new EventEmitter<Display>()


  getId(){
    Math.ceil(Math.random())
  }
  constructor() { }

  submitQuote(){
    this.Quote.emit(this.newDisplay)
   console.log('winning')
  }

 

  ngOnInit(): void {
  }

}
