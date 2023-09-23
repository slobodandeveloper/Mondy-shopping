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
import OTPInputView from '@twotalltotems/react-native-otp-input';

interface Props extends RouteComponentProps {
  history;
}

const AppPin: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToHome = () => {
    history.push('/');
  };

  const goToCheckout = () => {
    history.push('/PaymentSuccessful');
  };

  return (
    <View style={style.mainContainer}>
      <Header onPress={goToHome} isBack={true} isLogo={true} />
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
          Insert your Mandy’s App PIN
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
            alignSelf: 'center',
          }}>
          <OTPInputView
            style={{width: '65%', height: 100, alignSelf: 'center'}}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged={(otp) => {
            //   this.setState({ otp });
            // }}
            // placeholderCharacter={otp}
            autoFocusOnLoad
            codeInputFieldStyle={{
              width: 50,
              height: 70,
              // borderWidth: 1,
              backgroundColor: '#F7F8FB',
              borderRadius: 10,
              color: Colors.black,
            }}
            // codeInputHighlightStyle={{borderColor: '#03DAC6'}}
            onCodeFilled={otp => {
              console.log('otp', otp);
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: 'rgba(0,0,0,0.5)',
            fontSize: 16,
            marginTop: 15,
          }}>
          Resend in 00:30
        </Text>
        <RoundButton
          label={'OK'}
          buttonStyle={{
            minWidth: 250,
            width: '100%',
            backgroundColor: Colors.lightSecondary,
            borderWidth: 0,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 0,
            marginTop: 70,
            borderRadius: 20,
            height: 40,
          }}
          onPress={goToCheckout}
        />
      </ScrollView>
    </View>
  );
};

export default AppPin;

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
