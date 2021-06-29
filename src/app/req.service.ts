import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ReqService {
  constructor(private http: HttpClient) {}

  URL_BASE = "https://calm-anchorage-20290.herokuapp.com/api/v1/";

  newBills(bills) {
    return this.http.post(`${this.URL_BASE}bills`, bills);
  }

  selectBills() {
    return this.http.get(`${this.URL_BASE}bills`);
  }
}
