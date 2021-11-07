import {Action} from 'redux';
import { ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';


export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
  GetOffers = 'data/getOffers',
  SetCurrentOffer = 'data/setCurrentOffer',
  SetFetchStatus = 'data/setFetchStatus',
  SetCommentsList = 'data/setCommentsList',
  SetNearbyOffersList = 'data/setNearbyOffersList',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetLogin = 'user/setLogin',
  RedirectTo = 'main/redirectTo'
}

export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, AxiosInstance, Action>;
