import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import AuthPage from "./pages/authPage/authPage";
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ChewiePage from './pages/ChewiePage/chewiepage.component';
import LeachiePage from './pages/LeachiePage/leachiepage.component';
import EuroPage from './pages/EuroPage/europage.component';
import GeckoPage from './pages/GeckoPage/geckopage.component';
import SupplyPage from "./pages/SupplyPage/supplypage.component";
import ShopPage from './pages/browse/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/chahuoa' component={ChewiePage}/>
                        <Route path='/leachieanus' component={LeachiePage}/>
                        <Route path='/eurodactylodes' component={EuroPage}/>
                        <Route path='/gecko' component={GeckoPage}/>
                        <Route path='/supply' component={SupplyPage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route exact path='/checkout' component={CheckoutPage}/>
                        <Route exact path='/authent' render={() => this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <AuthPage />
                        )
                    }
                        />
                    </Switch>
                </div>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,
    mapDispatchToProps
)(App);
