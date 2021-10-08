type userTypes = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

type reviewsTypes = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: userTypes,
}

const reviews: reviewsTypes[] = [
  {
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "2019-05-08T14:13:56.569Z",
    "id": 1,
    "rating": 4,
    "user": {
      "avatarUrl": "img/1.png",
      "id": 4,
      "isPro": false,
      "name": "Max",
    }
  }
];

export {reviews};
