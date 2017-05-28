import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TempInfoComponent } from './temp-info/temp-info.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { HotelFilterPipe } from './common/pipe/hotel-filter.pipe';
import { HotelItemComponent } from './hotel-item/hotel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TempInfoComponent,
    SocialInfoComponent,
    HotelFilterPipe,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
