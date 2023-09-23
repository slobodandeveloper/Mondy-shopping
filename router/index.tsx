import React from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {connect} from 'react-redux';
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import BaseHome from '../pages/BaseHome';
import BaseStart from '../pages/BaseStart';
import BaseNext from '../pages/BaseNext';
import {ApplicationConfig} from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemedView';
import Login from '../pages/Login/Index';
import CreateAccount from '../pages/CreateAccount/Index';
import Home from '../pages/Home/Index';
import Shopping from '../pages/Shopping';
import ProductDetails from '../pages/Shopping/ProductDetails';
import Bag from '../pages/Bag';
import Payment from '../pages/Payment';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgotPassword/Index';
import EmailSent from '../pages/EmailSent/Index';
import MenuHome from '../pages/MenuHome/Index';
import AppPin from '../pages/AppPin';
import PaymentSuccessful from '../pages/PaymentSuccessful';
import OrderDetail from '../pages/OrderDetail';
import BestSellers from '../pages/BestSellers';
import DeliveryTracking from '../pages/DeliveryTracking';
import FindStore from '../pages/FindStore';
import MyWallet from '../pages/MyWallet';
import TopUp from '../pages/TopUp';
import Statistics from '../pages/Statistics';
import Portfolio from '../pages/Portfolio';

interface Props {
  configReducer: ApplicationConfig;
}

const Router: React.FunctionComponent<Props> = ({configReducer}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
          <BackHandlerHOC>
            <Switch>
              <Route exact path="/" component={BaseStart} />
              <Route
                exact
                path="/PaymentSuccessful"
                component={PaymentSuccessful}
              />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/MyWallet" component={MyWallet} />
              <Route exact path="/OrderDetail" component={OrderDetail} />
              <Route exact path="/Statistics" component={Statistics} />
              <Route exact path="/TopUp" component={TopUp} />
              <Route exact path="/MyWallet" component={MyWallet} />
              <Route exact path="/FindStore" component={FindStore} />
              <Route
                exact
                path="/DeliveryTracking"
                component={DeliveryTracking}
              />
              <Route exact path="/BestSellers" component={BestSellers} />
              <Route exact path="/AppPin" component={AppPin} />

              <Route exact path="/signup/" component={BaseNext} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/createAccount/" component={CreateAccount} />
              <Route exact path="/forgotPassword/" component={ForgotPassword} />
              <Route exact path="/emailSent/" component={EmailSent} />
              {/* <Route exact path="/home/" component={Home} /> */}
              <Route exact path="/home/" component={MenuHome} />
              <Route exact path="/shopping/" component={Shopping} />
              <Route path="/productDetails/" component={ProductDetails} />
              <Route path="/bag/" component={Bag} />
              <Route path="/payment/" component={Payment} />
              <Route path="/checkout/" component={Checkout} />
              <Route path="/profile/" component={Profile} />
            </Switch>
          </BackHandlerHOC>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  );
};

export default connect(({configReducer}) => ({configReducer}))(Router);

interface Style {
  container: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
});
