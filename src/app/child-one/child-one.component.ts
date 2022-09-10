import { Component, ViewEncapsulation } from "@angular/core";


@Component({
    selector: 'app-child-one',
    templateUrl:"./child-one.component.html",
    styleUrls: ['./child-one.component.css']
    
   
    // encapsulation: ViewEncapsulation.None
})


export class ChildOneComponent{
  firstname : string = "Supriya";
  lastname : string = "Ghatage";
  contact : number = 123456789;
  myImg : string = "https://wallpapercave.com/wp/j8Sd6Uv.jpg";
  ismarried : boolean = true;
  printhello(){
    return "Hello Angular"
  }
  stdObj:any ={
    fname : "supriya",
    lname : "ghatage",
    age : 25
  }
  stdArr:any[]=[]

  showBtn:boolean =false
  showRed : boolean =true
  

}