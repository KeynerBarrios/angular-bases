import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter/counter.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HereosModule } from './heroes/heros.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HereosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
