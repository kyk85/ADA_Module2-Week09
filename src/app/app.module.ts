import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailSelectedComponent } from './detail-selected/detail-selected.component';
import { ItemService } from './item.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailSelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
