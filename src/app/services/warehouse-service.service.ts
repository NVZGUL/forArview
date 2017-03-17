import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Item} from "../models/items";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class WarehouseServiceService {

  constructor(private http: Http) { }

  private takenUrl = 'app/items';

  getWarehouseitem(): Observable<Item[]>{
    return this.http.get(this.takenUrl)
      .map((res: Response)=>res.json().data)
      .catch((err: any) => Observable.throw(err.json().error || "Server error"));
  }

}
