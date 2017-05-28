import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export const data: Hotel[] = [
  {
    _id: 0,
    name: 'Хабаровск Сити',
    city: 'Хабаровск',
    address: 'ул. Истомина, д.64, 680000, Хабаровск, Россия',
    phone: 'нет',
    stars: 0,
    social: {
      following: 10,
      followers: 0
    },
    temperature: {
      water: 20,
      air: 30
    },
    images: [
      'assets/images/hc_0.jpeg',
      'assets/images/hc_1.jpeg'
    ]
  },
  {
    _id: 1,
    name: 'Парус',
    city: 'Хабаровск',
    address: 'ул. Шевченко , д.5, 680000, Хабаровск, Россия',
    phone: '8 (4212) 60-01-23',
    stars: 5,
    social: {
      following: 100,
      followers: 85
    },
    temperature: {
      water: 20,
      air: 30
    },
    images: [
      'assets/images/pr_0.jpeg',
      'assets/images/pr_1.jpeg'
    ]
  },
  {
    _id: 2,
    name: 'Рэдиссон Блю Шереметьево',
    city: 'Москва',
    address: 'Международное шоссе, 2, 141400, Москва, Россия',
    phone: '8 (495) 280-34-20',
    stars: 4,
    social: {
      following: 300,
      followers: 1543
    },
    temperature: {
      water: 10,
      air: 15
    },
    images: [
      'assets/images/rds_0.jpeg',
      'assets/images/rds_1.jpeg'
    ]
  },
  {
    _id: 3,
    name: 'Bänklialp',
    city: 'Энгельберг',
    address: 'Bänklialpweg 25, 6390, Энгельберг, Швейцария',
    phone: '+41(41)6397373',
    stars: 3,
    social: {
      following: 1,
      followers: 15674
    },
    temperature: {
      water: 0,
      air: -10
    },
    images: [
      'assets/images/bs_0.jpeg',
      'assets/images/bs_1.jpeg'
    ]
  },
];

export const hotels$: Observable<Hotel[]> = Observable.of(data).delay(2000);
