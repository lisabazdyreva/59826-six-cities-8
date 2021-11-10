import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import classNames from 'classnames';

import type {Offer} from '../../types/offer';

import {formatType, getRatingPercentValue, isMainPage} from '../../utils/utils';
import {AppRoute, AuthorizationStatus, CardTypes, DEFAULT_ID} from '../../const';

import {setActiveId} from '../../store/actions/action';
import {getAuthorizationStatus} from '../../store/app-user/selectors';


type CardProps = {
  card: Offer;
  typeCard: string;
  onFavoriteClick : (isFavorite: boolean, id: number) => void;
}


function Card({card, typeCard, onFavoriteClick}: CardProps): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const history = useHistory();

  const {
    price,
    title,
    isPremium,
    rating,
    type,
    previewImage,
    id,
  } = card;

  const {isFavorite} = card;

  const typeText = formatType(type);
  const ratingPercentValue = getRatingPercentValue(rating);

  const setId = () => {
    if (typeCard === CardTypes.Main) {
      dispatch(setActiveId(id));
    }
  };

  const setDefaultId = () => {
    if (typeCard === CardTypes.Main) {
      dispatch(setActiveId(DEFAULT_ID));
    }
  };


  const handleEnter = useCallback(
    setId,
    [],
  );

  const handleLeave = useCallback(
    setDefaultId,
    [],
  );

  const onFavoriteChange = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      onFavoriteClick(isFavorite, id);
    } else {
      history.push(AppRoute.Login);
    }
  };

  return (
    <article
      className={classNames(
        'place-card',
        {'cities__place-card': isMainPage(typeCard)},
        {'near-places__card': !isMainPage(typeCard)},
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >

      {isPremium && isMainPage(typeCard) ? <div className="place-card__mark"><span>Premium</span></div> : ''}

      <div
        className={classNames(
          'place-card__image-wrapper',
          {'cities__image-wrapper': isMainPage(typeCard)},
          {'near-places__image-wrapper': !isMainPage(typeCard)},
        )}
      >

        <Link to={`${AppRoute.Room}/${ id }`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
            type="button"
            onClick={onFavoriteChange}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentValue}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${ id }`}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeText}</p>
      </div>
    </article>
  );
}


export {Card};
export default Card;
