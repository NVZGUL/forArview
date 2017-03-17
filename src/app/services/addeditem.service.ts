import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Added_Items} from "../models/added_items";



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AddeditemService {


  constructor(private http: Http) { }

  private takenUrl = 'app/added_item';

  getAddedItems(): Observable<Added_Items[]> {
    return this.http.get(this.takenUrl)
      .map((res: Response) => res.json().data)
      .catch((err: any) => Observable.throw(err.json().error || "Server Error"));
  }

}
