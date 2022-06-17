import {Component} from "@angular/core";
import {WeatherService} from "../services/weather.service";
import {user} from "../interfaces/user.interface";
import {contact} from "../interfaces/contact.interface";


@Component({
  selector: 'app-practiceexam',
  templateUrl: './practiceexam.component.html'
})
export class PracticeexamComponent {

  user: user[] = [];
  contact: contact[] = [];
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(){
    this.weatherService.contactList().subscribe(value => {
      this.user = value.data.user;
      this.contact = value.data.contact;
    })
  }

}

