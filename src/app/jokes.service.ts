import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/pluck';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JokesService {

  constructor(private httpClient: HttpClient) {

  }

  getJoke(): Observable<string> {
    return Observable.interval(6000).flatMap(() => {
      return this.httpClient.get('https://api.chucknorris.io/jokes/random').pluck('value');

    });

  }
}
