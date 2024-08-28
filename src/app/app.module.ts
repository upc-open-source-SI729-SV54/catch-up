import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './public/footer-content/footer-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavigationBarComponent } from './public/side-navigation-bar/side-navigation-bar.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NewsApiService} from "./news/services/news-api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatListItem, MatListItemAvatar, MatListItemLine, MatNavList} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatNavList,
    MatListItem,
    MatListItemAvatar,
    MatListItemLine
  ],
  providers: [
    provideAnimationsAsync(),
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
