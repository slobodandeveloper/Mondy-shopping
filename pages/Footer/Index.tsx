import React, {useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {
  Text,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AppConstants, AppTheme} from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../hooks/useTheme';

interface Props extends RouteComponentProps {
  history?: any;
  selected?: any;
}

// @ts-ignore
const ImagePath = require('../../images/Recraftsoppify_aap_bg_effect.png');

const FooterNavigation: React.FunctionComponent<Props> = ({
  history,
  selected,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const [homeActive, setHomeActive] = useState(false);
  const [walletActive, setWalletActive] = useState(false);
  const [bagActive, setBagActive] = useState(false);
  const [ticketActive, setTicketActive] = useState(false);
  const [mapActive, setMapActive] = useState(false);

  const goToLogin = () => {
    history.push('/login');
  };

  const backButton = () => {
    history.push('/profile');
    setHomeActive(true);
    setWalletActive(false);
    setBagActive(false);
    setTicketActive(false);
    setMapActive(false);
  };

  const goToShopping = () => {
    setHomeActive(false);
    setWalletActive(true);
    setBagActive(false);
    setTicketActive(false);
    setMapActive(false);
    history.push('/MyWallet');
  };

  const goToBag = () => {
    history.push('/BestSellers');
    setHomeActive(false);
    setWalletActive(false);
    setBagActive(true);
    setTicketActive(false);
    setMapActive(false);
  };

  const goToDetails = () => {
    history.push('/AppPin');
    setHomeActive(false);
    setWalletActive(false);
    setBagActive(false);
    setTicketActive(true);
    setMapActive(false);
  };

  const goToProfile = () => {
    history.push('/FindStore');
    setHomeActive(false);
    setWalletActive(false);
    setBagActive(false);
    setTicketActive(false);
    setMapActive(true);
  };

  return (
    <View
      style={[
        style.container,
        {
          borderColor: theme.lightBottomColor,
          backgroundColor: '#AEAEC033',
          borderRadius: 30,
        },
      ]}>
      <TouchableOpacity onPress={backButton}>
        <View style={style.iconContainer}>
          <Image
            source={require('../../images/Home.png')}
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={homeActive || selected == 1 ? '#FE8787' : '#130F26'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToShopping}>
        <View style={style.iconContainer}>
          <Image
            source={require('../../images/Wallet.png')}
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={walletActive || selected == 2 ? '#FE8787' : '#130F26'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToBag}>
        <View style={style.iconContainer}>
          <Image
            source={require('../../images/Buy.png')}
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={bagActive || selected == 3 ? '#FE8787' : '#130F26'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToDetails}>
        <View style={style.iconContainer}>
          <Image
            source={require('../../images/Ticket.png')}
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={ticketActive || selected == 4 ? '#FE8787' : '#130F26'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile}>
        <View style={[style.iconContainer, {backgroundColor: 'transparent'}]}>
          <Image
            source={require('../../images/Location.png')}
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={mapActive || selected == 5 ? '#FE8787' : '#130F26'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavigation;

interface Style {
  IconTitle: TextStyle;
  container: ViewStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '80%',
    alignItems: 'center',
    elevation: 12,
    alignSelf: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  iconContainer: {
    alignItems: 'center',
  },
  Icon: {
    fontSize: 30,
  },
  IconTitle: {
    fontSize: 12,
  },
});
