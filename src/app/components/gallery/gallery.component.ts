import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
