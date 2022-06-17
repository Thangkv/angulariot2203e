import {Component, Input} from "@angular/core";
import { IWeather} from "../interfaces/weather.interface";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html'
})
export class InformationComponent {
  @Input()
  weather!: IWeather;
}
