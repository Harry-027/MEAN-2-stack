import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'games',
  templateUrl: 'games.component.html'
})
export class GamesComponent  { 
  list:Array<Object>;
  searchstr: string;
  searchRes: Array<Object>;
  constructor(private _gamesService : GamesService) {
    this._gamesService.getGames().subscribe(res => {
        this.list = res;
    });
  }
  searchGames() {
    this._gamesService.search(this.searchstr)
    .subscribe((res)=>{
        this.searchRes = res;
    }) ;
  }
 }
