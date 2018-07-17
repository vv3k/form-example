import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {}

  private GET_USERS = './assets/db.json';
  private sourceRows = new BehaviorSubject<null | Object>(null);

  // Observable stream
  private rowReceived$ = this.sourceRows.asObservable();

  getUsers() {
    return this.http.get(this.GET_USERS);
  }

  newRow(row: Object) {
    this.sourceRows.next(row);
  }
}
