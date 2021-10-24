import type {Offers} from '../types/offer';
import {Locations, Users} from '../const';

const Ids = {
  AMSTERDAM_APARTMENT: 111,
  AMSTERDAM_ROOM: 222,
  AMSTERDAM_HOUSE: 333,
  AMSTERDAM_HOTEL: 444,
  PARIS_APART: 555,
} as const;

export const offers: Offers = [
  {
    bedrooms: 3,
    city: {
      location: Locations.Amsterdam,
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: Users.Angelina,
    id: Ids.AMSTERDAM_APARTMENT,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: Locations.Amsterdam,
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: ['Coffee machine', 'Dishwasher', 'Washer', 'WIFI', 'Conditioner', 'TV'],
    host: Users.Angelina,
    id: Ids.AMSTERDAM_ROOM,
    images: ['img/room.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.1,
    title: 'Beautiful room at great location',
    type: 'room',
  },
  {
    bedrooms: 10,
    city: {
      location: Locations.Amsterdam,
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: ['Coffee machine'],
    host: Users.Default,
    id: Ids.AMSTERDAM_HOUSE,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 15,
    previewImage: 'img/apartment-03.jpg',
    price: 500,
    rating: 1.2,
    title: 'Beautiful house at great location',
    type: 'house',
  },
  {
    bedrooms: 2,
    city: {
      location: Locations.Amsterdam,
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: ['Coffee machine', 'Heating', 'Breakfast', 'Dinner', 'Lunch', 'WiFi', 'Bar', 'Parking'],
    host: Users.Default,
    id: Ids.AMSTERDAM_HOTEL,
    images: ['img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 10000,
    rating: 3.6,
    title: 'Beautiful hotel at great location',
    type: 'hotel',
  },
  {
    bedrooms: 2,
    city: {
      location: Locations.Paris,
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: ['Coffee machine', 'Heating', 'Breakfast', 'Dinner', 'Lunch', 'WiFi', 'Bar', 'Parking'],
    host: Users.Default,
    id: Ids.PARIS_APART,
    images: ['img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 10000,
    rating: 3.6,
    title: 'Beautiful hotel at great location',
    type: 'hotel',
  },
];
