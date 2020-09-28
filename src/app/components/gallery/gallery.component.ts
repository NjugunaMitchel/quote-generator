import { Component, OnInit} from '@angular/core';
import { Display }  from 'src/app/models/display';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   
  gallery:Display[]= [
    new Display('Mishel', 'Nelson Mandela', 'Education is the most powerful weapon that you can use to change the world', 2, 4, new Date(2019,8,9)),
    new Display('Mishel', 'Albert Einstein', ' Creativity is contagious, pass it on', 2, 4, new Date(2018,1,5)),
    new Display('Mishel', 'Edmund Hillary', 'It is not the mountain we conquer, but ourselves', 2, 4,new Date(2020,8,8))
    
  ]
  
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
  highlightHighest() {
        
    let quotesUpvote = []
    let highestUpVote: number
    for (let i = 0; i < this.gallery.length; i++) {
      quotesUpvote.push(this.gallery[i].upvotes)
    }
    
    quotesUpvote.sort(function (a, b) {
       
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
