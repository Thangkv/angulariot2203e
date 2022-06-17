import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IDataJSON1} from "../interfaces/contact.interface";


@Injectable({
  providedIn:'root'
})
export class PraticeexamService{
  constructor(private httpClient: HttpClient) {
  }
  contactList(){
    return this.httpClient.get<IDataJSON1>('http://localhost:4200/assets/data1.json');
  }
}
