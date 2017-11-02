import { JokesService } from './jokes.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  joke$;
  constructor(private jokesService: JokesService) {

    this.joke$ = jokesService.getJoke()
    .startWith('Chuck Norris was expelled from the 5th grade when he took Steve, his pet Velociraptor for show and tell.');

  }
}
