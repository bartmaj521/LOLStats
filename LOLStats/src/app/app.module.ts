import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { DDragonService } from './shared/services/ddragon/ddragon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DDragonService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
