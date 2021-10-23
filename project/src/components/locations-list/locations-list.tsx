import React, {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

import {AppRoute} from '../../const';
import {State} from '../../types/state';

import {fillOffersList, selectActiveCity} from '../../store/actions/action';

import {filterOffers} from '../../utils';


function mapStateToProps ({selectedCity}: State) {
  return ({
    selectedCity,
  });
}

function mapDispatchToProps (dispatch: Dispatch) {
  return ({
    onCitySelect(evt: SyntheticEvent) { // точно ли выбран нормальный тип для события, т.к. без след. строчки ругается
      const element = evt.target as HTMLInputElement;
      const updatedOffers = filterOffers(element.innerText);
      dispatch(selectActiveCity(element.innerText));
      dispatch(fillOffersList(updatedOffers));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type LocationsListProps = {
  cities: string[];
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & LocationsListProps;


function LocationsList({cities, onCitySelect, selectedCity}: ConnectedComponentProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li
            className="locations__item"
            key={city}
            onClick={(evt) => onCitySelect(evt)}
          >
            <Link
              className={classNames(
                'locations__item-link tabs__item',
                {'tabs__item--active': city === selectedCity},
              )}
              to={AppRoute.Main}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export {LocationsList};
export default connector(LocationsList);
