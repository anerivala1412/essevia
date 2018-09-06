
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { BANK_INFO } from './dummy-data';
@Injectable()
export class FetchDataService {
constructor() { }
getCharacters(): Observable<any[]>{
  return Observable.of(BANK_INFO);
}
getColumns(): string[]{
  return [ "Customer Number","Name", "Token", "Account Number"]};
}