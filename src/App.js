import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unSuscribeFromAuth = null;

  // when the componenet mounts we will fetch the data from the firebase/backend to check where the user is logged in or not

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //this is an open subscription methodh which may lead to data leaks
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })

      } else {
        setCurrentUser(userAuth)
      }

    })

  }

  componentWillUnmount() {
    auth.unSuscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route excat path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
