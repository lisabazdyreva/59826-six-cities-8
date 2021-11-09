import {Link} from 'react-router-dom';
import {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Logo from '../logo/logo';

import {AppRoute, AuthorizationStatus} from '../../const';

import {logoutAction} from '../../store/actions/api-actions';
import {getAuthorizationStatus, getLogin} from '../../store/app-user/selectors';


function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const login = useSelector(getLogin);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutAction());

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth ? (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper" />
                        <span className="header__user-name user__name">{login}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" onClick={onLogout}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>
                  </>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
export default memo(Header);
