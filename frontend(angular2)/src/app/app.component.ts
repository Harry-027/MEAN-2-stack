import { Component } from '@angular/core';
import { GamesComponent} from './components/games/games.component';
import { GamesService } from './services/games.service';
//import { JSONP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [GamesService]
})
export class AppComponent  { 

 }
