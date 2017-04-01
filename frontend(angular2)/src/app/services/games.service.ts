import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GamesService {
    constructor(private _http: Http) {
    }

    getGames() {
        let s = this._http.get('http://localhost:8000').map(res => res.json());
        return s;
    }

    search(searchStr: string)  {
         let s = this._http.get('http://localhost:8000/search?query='+ searchStr).map(res => res.json());
        return s;
    }
} 