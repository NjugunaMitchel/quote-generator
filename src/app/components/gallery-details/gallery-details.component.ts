import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Display } from 'src/app/models/display'

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})

export class GalleryDetailsComponent implements OnInit {

  @Input() gallery: Display;
  @Output() remove = new EventEmitter<boolean>();

  deleteQuote(clear:boolean){
    this.remove.emit(clear);
  }

  downvote(){
    this.gallery.downvotes++
  }

  upvote(){
    this.gallery.upvotes++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
