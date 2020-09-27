import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Display }  from 'src/app/display';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   
  gallery:Display[]= [
    {name:'Mishel', author:'mishel', quote:'Yolo my people'},
    {name:'Mishel', author:'mishel', quote:'Yolo my people'}, 
    {name:'Mishel', author:'mishel', quote:'Yolo my people'}
    
  ]
  
  
  addQuote(Display){
    Display.name = Display.name;
    Display.author = Display.author;
    Display.quote = Display.quote
    this.gallery.push(Display);

  }
  constructor() { }
 

  ngOnInit(): void {
  }

}
