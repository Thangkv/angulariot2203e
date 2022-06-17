import {Component} from "@angular/core";
import {IForecast} from "../interfaces/forecast.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import { enableProdMode } from '@angular/core';
import {observable} from "rxjs";


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent{
  //@ts-ignore
  data: IForecast = null;


  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(){

  }
  enableProdMode(){

  }
  getData(){

    this.httpClient.get<IForecast>("https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")

      .subscribe( value=>{
        this.data = value;

      })

  }

}
