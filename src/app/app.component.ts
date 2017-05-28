import { Component } from '@angular/core';
import { hotels$ } from './data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public hotelList$: Observable<Hotel[]> = hotels$;

  public hotel: Hotel;

  public selectHotel(hotel: Hotel): void {
    this.hotel = hotel;
  }

}
