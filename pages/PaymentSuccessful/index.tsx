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
} from 'react-native';
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

interface Props extends RouteComponentProps {
  history;
}

const PaymentSuccessful: React.FunctionComponent<Props> = ({
  history,
}: Props) => {
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
    <View style={style.mainContainer}>
      <Header onPress={() => {}} isBack={false} />
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: Colors.black,
            fontSize: 16,
            marginTop: 15,
          }}>
          Payment Successful
        </Text>
        <Image
          source={require('../../images/paymentLogo.png')}
          resizeMode="cover"
          style={{
            height: 200,
            width: 200,
            marginTop: 25,
          }}
        />
        <Text
          style={{
            color: Colors.secondary,
            fontFamily: Fonts.poppins_700,
            fontSize: 23,
          }}>
          THANK YOU
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontFamily: Fonts.poppins_400,
            fontSize: 20,
            marginVertical: 25,
          }}>
          You get{' '}
          <Text
            style={{
              color: Colors.black,
              fontFamily: Fonts.poppins_600,
              fontSize: 20,
            }}>
            4 unicorns
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: Fonts.poppins_400,
            color: Colors.black,
            fontSize: 16,
            width: '70%',
            textAlign: 'center',
          }}>
          Your order was delivered successfully. For more details, check History
          under Portfolio Tab
        </Text>
        <RoundButton
          label={'History'}
          buttonStyle={{
            minWidth: 250,
            width: '100%',
            backgroundColor: Colors.secondary,
            borderWidth: 0,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 0,
            marginTop: 70,
            borderRadius: 20,
          }}
          onPress={() => {}}
        />
        <RoundButton
          label={'Home'}
          buttonStyle={{
            minWidth: 250,
            width: '100%',
            borderColor: Colors.secondary,
            borderWidth: 2,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 0,
            marginTop: 15,
            borderRadius: 20,
            backgroundColor: Colors.white,
          }}
          onPress={goToHome}
          labelStyle={{
            color: Colors.black,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentSuccessful;

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

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
