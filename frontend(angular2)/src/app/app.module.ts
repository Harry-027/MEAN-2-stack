import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { GamesComponent } from './components/games/games.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, HttpModule,
                 JsonpModule, FormsModule ],
  declarations: [ AppComponent, GamesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
