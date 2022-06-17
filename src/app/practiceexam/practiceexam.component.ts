import {Component} from "@angular/core";
import {PraticeexamService} from "../services/praticeexam.service";
import {user} from "../interfaces/user.interface";
import {contact} from "../interfaces/contact.interface";



@Component({
  selector: 'app-practiceexam',
  templateUrl: './practiceexam.component.html'
})
export class PracticeexamComponent {

  user: user[] = [];
  contact: contact[] = [];
  constructor(private practiceexamService: PraticeexamService) {
  }
  ngOnInit(){
    this.practiceexamService.contactList().subscribe(value => {
      this.user = value.data.user;
      this.contact = value.data.contact;
      console.log(this.user);
    })
  }

}

