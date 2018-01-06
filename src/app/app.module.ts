import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {MyHeroService} from "./my-hero.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyHeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
