import {Component, Input} from "@angular/core";
@Component({
  selector:"app-student",
  templateUrl:"./student.component.html"
})
export class StudentComponent{
    @Input ("studentName")      studentName !:string;
    @Input ("studentAge")      studentAge !:number;
  @Input ("studentTel")      studentTel !:string;

  @Input("productId")       productId !:number;
  @Input("productName")     productName !:string;
  @Input("productPrice")    productPrice  !:number;
  @Input("productQuanty")    productQuanty !:number;

}
