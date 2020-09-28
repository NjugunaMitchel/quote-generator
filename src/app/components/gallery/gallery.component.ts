import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Display }  from 'src/app/models/display'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   
  gallery:Display[]= [
    new Display(1 ,'Mishel', 'mishel', 'Yolo my people', 2, 4, new Date(2019,8,9)),
    new Display(2 ,'Mishel', 'mishel', 'Yolo my people', 2, 4, new Date(2018,1,5)),
    new Display(3 ,'Mishel', 'mishel', 'Yolo my people', 2, 4,new Date(2020,8,8))
    
  ]
  Display: any;
  addNewQuote(gallery){
    
    this.gallery.push(gallery);
  }
  
  showMore(index){
    this.gallery[index].showMore = !this.gallery[index].showMore;
  }
  deleteGallery(remove, index){
    if(remove){
      this.gallery.splice(index,1)
    }
  }
  
  

 
  constructor() { }
 

  ngOnInit(): void {
  }

}
