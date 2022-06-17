import {Component} from "@angular/core";
@Component({
  selector:"app-classroom",
  templateUrl:"./lophoc.component.html"
})
export class LophocComponent{
  className:string = 'T2203F';
  studentName:string[] = ["Đỗ Duy Nam", "Nguyên Văn Bình"];
  studentAge: number[] = [ 22,18,12];
  studentTel: string[] = ["0919171234","0987654322", "08834567"];

  productId:number[] = [1,2,3];
  productName:string[]=["Iphone","SamSung","Oppo"];
  productPrice:number[]=[200,150,100];
  productQuanty:number[]=[10,15,12]

  changeName(){
    this.className = 'T2204M';
  }
}
