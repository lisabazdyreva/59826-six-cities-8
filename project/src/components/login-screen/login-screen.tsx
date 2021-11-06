import {Link, Redirect} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Icons from '../icons/icons';
import Logo from '../logo/logo';
import LoginScreenForm from '../login-screen-form/login-screen-form';

import {AppRoute, AuthorizationStatus} from '../../const';
import {State} from '../../types/state';


function mapStateToProps({authorizationStatus}: State) {
  return ({
    authorizationStatus,
  });
}

const connector = connect(mapStateToProps);

type LoginScreenProps = {
  onAuth: () => void;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = LoginScreenProps & PropsFromRedux;


function LoginScreen({onAuth, authorizationStatus}: ConnectedComponentProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <>
      <Icons />
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo />
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginScreenForm onAuth={onAuth}/>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>Amsterdam</span> {/*TODO должен ли быть захордкожен город*/}
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export {LoginScreen};
export default connector(LoginScreen);

