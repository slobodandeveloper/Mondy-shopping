import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {AppTheme, AppConstants} from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import {
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Modal,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import FooterNavigation from '../Footer/Index';
import BagItem from '../../components/Base/BagItem';
import BagOption from '../../components/Base/BagOption';
import {AppLanguage} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import Header from '../../components/Base/Header';
import {Fonts} from '../../assets/fonts/fontsFamily';
import {Colors} from '../../assets/colors/Colors';
import RoundButton from '../../components/Base/RoundButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface Props extends RouteComponentProps {
  history;
}

const DeliveryTracking: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToHome = () => {
    history.push('/');
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    // <View style={styles.mainContainer}>
    <View style={styles.container}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </MapView>
      <View
        style={{
          position: 'absolute',
          // top: 50,
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          top: 25,
        }}>
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require('../../images/left.png')}
            style={{
              height: 25,
              width: 25,
              left: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../images/menu.png')}
            style={{
              height: 15,
              width: 15,
              right: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.shopDetailsContainer}>
        <View style={styles.profilecontiner}>
          <View>
            <Image
              source={require('../../images/profileuser.jpeg')}
              style={styles.profileStyle}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={{fontSize: 16, color: 'black'}}>Lil Nas X</Text>
            <Text style={{color: 'gray'}}>5.0 based on 100 ratings</Text>
          </View>
          <View style={styles.starView}>
            <Image
              source={require('../../images/Star.png')}
              style={styles.starimg}
            />
            <Image
              source={require('../../images/Star.png')}
              style={styles.starimg}
            />
            <Image
              source={require('../../images/Star.png')}
              style={styles.starimg}
            />
            <Image
              source={require('../../images/Star.png')}
              style={styles.starimg}
            />
            <Image
              source={require('../../images/Star.png')}
              style={styles.starimg}
            />
          </View>
        </View>

        <View style={styles.secConteiner}>
          <View>
            <Image
              source={require('../../images/Clock.png')}
              style={[styles.starimg, {marginHorizontal: 10}]}
            />
          </View>
          <View>
            <Text style={{color: 'gray'}}>Your delivery time</Text>
            <Text>15 minutes</Text>
          </View>
        </View>
        <View style={styles.bottomconteiner}>
          <View style={styles.bottomImgTextConteiner}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={require('../../images/pin.png')}
                  style={[styles.starimg, {marginHorizontal: 10}]}
                />
              </View>
              <View>
                <Text style={{color: 'gray'}}>Your delivery time</Text>
                <Text>15 minutes</Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../../images/phone.png')}
                style={styles.iconStyle}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default DeliveryTracking;

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  footerContainer: ViewStyle;
  checkoutButton: ViewStyle;
  backIcon: ViewStyle;
  title: TextStyle;
  checkoutStyle: TextStyle;
}

export const styles: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
  },

  childContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContainer: {
    alignItems: 'flex-start',
    flex: 0,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 8,
  },
  footerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 300,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  checkoutButton: {
    borderRadius: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  checkoutStyle: {
    fontSize: 16,
    padding: 10,
  },
  container: {
    flex: 1,
  },

  shopDetailsContainer: {
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  shopImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contian',
    marginBottom: 10,
    borderRadius: 10,
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shopMobile: {
    fontSize: 18,
    marginBottom: 10,
  },
  shopDescription: {
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  descriptionview: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  starimg: {width: 20, height: 20, marginHorizontal: 2},
  starView: {
    flexDirection: 'row',
  },
  profileStyle: {width: 60, height: 60, borderRadius: 60},
  profilecontiner: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // alignContent: 'space-between',
    width: '100%',
  },
  secConteiner: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    alignItems: 'center',
    paddingTop: 10,
  },
  iconStyle: {width: 80, height: 80, marginBottom: 20},
  bottomconteiner: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    alignItems: 'center',
  },
  bottomImgTextConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
});
