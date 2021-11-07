import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import type {Offers} from '../../types/offer';

import FavoriteCards from '../favorite-cards/favorite-cards';

import {getFavoriteCitiesList} from '../../utils/utils';

import {AppRoute} from '../../const';
import {getOffers} from '../../store/app-data/selectors';


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];


function getFavoriteCardsByCities(cards: Offers): FavoriteCardsByCities {
  const favoriteCards = cards.filter((card) => !card.isFavorite); // TODO пока для отладки так
  const favoriteCities = getFavoriteCitiesList(favoriteCards);

  return favoriteCities.map((city) => Object.assign({}, {[city]: favoriteCards.filter((card) => card.city.name === city)}));
}

function FavoritesCardsList(): JSX.Element {
  const offers = useSelector(getOffers);
  const favoriteCardsByCities = getFavoriteCardsByCities(offers.slice());

  return (
    <ul className="favorites__list">
      {favoriteCardsByCities.map((city) => (
        <li className="favorites__locations-items" key={Object.values(city)[0][0].id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{Object.keys(city)}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {Object.values(city).map((cardsByCity) => <FavoriteCards cardsByCity={cardsByCity} key={cardsByCity[0].id}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export {FavoritesCardsList};
export default FavoritesCardsList;
