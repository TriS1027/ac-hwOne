import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  public onSelectingHotel: EventEmitter<Hotel> = new EventEmitter();

  @Input('hotel_list')
  public hotels: Hotel[];

  public starList: number[] = [];

  public selectedFilter: number = 0;

  public selectedHotel: Hotel;

  public constructor() {
  }

  public selectHotel(hotel: Hotel): void{
    this.selectedHotel = hotel;
    this.onSelectingHotel.emit(hotel);
  }

  public filterByStars(stars: number): void {
    if (stars !== 0) {
      this.selectedFilter = stars;
      const filteredHotels: Hotel[] = this.hotels.filter((hotel: Hotel) => hotel.stars === stars);
      this.selectHotel(filteredHotels[0]);
    } else {
      this.selectedFilter = null;
      this.selectHotel(this.hotels[0]);
    }
  }

  public ngOnInit(): void {
    const starList: number[] = this.hotels.map(
        function(a: Hotel): number {
          return a.stars;
        }
      );
    this.starList = starList.filter((x: number, i: number, a: number[]) => a.indexOf(x) === i).sort();

    this.selectedHotel = this.hotels[0];
    this.onSelectingHotel.emit(this.selectedHotel);
  }

}
