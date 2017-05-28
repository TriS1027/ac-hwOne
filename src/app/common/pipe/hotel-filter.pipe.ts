import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], stars?: number): Hotel[] {
    if (!stars) {
      return hotels;
    }
    return hotels
      .filter((hotel: Hotel) => hotel.stars === stars);
  }

}
