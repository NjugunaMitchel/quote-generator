export  class Display { 
  showMore:boolean;
  constructor(
    public  name:string,
    public  author:string,
    public  quote:string,
    public  upvotes:number,
    public  downvotes:number,
    public  date :Date
  ){
    this.showMore = false;
  }
    
}
