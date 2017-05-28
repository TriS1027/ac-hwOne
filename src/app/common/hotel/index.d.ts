type Hotel = {
  '_id': number,
  'name': string,
  'city': string,
  'address': string,
  'phone': string,
  'stars': number,
  'temperature': Weather,
  'social': Social,
  'images': string[]
};

type Weather = {
  'air': number,
  'water': number
};

type Social = {
  'followers': number,
  'following': number
};
