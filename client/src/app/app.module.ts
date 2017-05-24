import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { WallPostsComponent } from './wall/wall-posts/wall-posts.component';
import { WallLoginComponent } from './wall/wall-login/wall-login.component';

import { WallService } from "./wall/wall.service";

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    WallPostsComponent,
    WallLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
