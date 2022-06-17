import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {LophocComponent} from "./student/lophoc.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {InformationComponent} from "./information/information.component";
import {WeatherComponent} from "./weather/weather.component";
import {ForecastComponent} from "./forecast/forecast.component";
import {Baitap1Component} from "./baitap1/baitap1.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Assigment1Component} from "./assigment1/assigment1.component";
import {Assigment2Component} from "./assigment2/assigment2.component";
import {ArrayComponent} from "./assigment2/array.component";
import {Assignment22Component} from "./baitap2/baitap2.component";
import {PracticeexamComponent} from "./practiceexam/practiceexam.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LophocComponent,
    ProductComponent,
    ProductsComponent,
    InformationComponent,
    WeatherComponent,
    ForecastComponent,
    Baitap1Component,
    Assigment1Component,
    Assigment2Component,
    ArrayComponent,
    Assignment22Component,
    PracticeexamComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
