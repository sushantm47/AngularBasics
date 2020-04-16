import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketPageComponent } from './pages/cricket-page/cricket-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AddplayerComponent } from './pages/addplayer/addplayer.component';

@NgModule({
  declarations: [AppComponent, CricketPageComponent, AddplayerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
