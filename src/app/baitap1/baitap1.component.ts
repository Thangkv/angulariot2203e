import {Component} from "@angular/core";
import {IBaitap1} from "../interfaces/baitap1.interfaces";
import {HttpClient, HttpParams} from "@angular/common/http";
import {observable} from "rxjs";

@Component({
  selector: 'app-baitap1',
  templateUrl: './baitap1.component.html'
})
export class Baitap1Component {
  //@ts-ignore
  data: IBaitap1 = null;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(){
    this.getData('sentitems');

  }

  getData(sent: any){
    this.httpClient.get<IBaitap1>( "http://localhost:4200/assets/data.json")
      .subscribe( (value: any)=>{
        this.data = value;
        // this.data.mail. = value.mail[0].subject;
        console.log(this.data);
      })
  }
  sentitems(){
    this.getData('sentitems');

  }

}
