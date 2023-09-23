import React, {useState} from 'react';
import {RouteComponentProps} from 'react-router-native';
import {Dispatch} from 'redux';
import {
  View,
  ViewStyle,
  StyleSheet,
  Alert,
  TextStyle,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  CheckBox,
} from 'react-native';
import {AppConstants, AppTheme} from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import {AppLanguage} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import AppIntroSlider from 'react-native-app-intro-slider';
import RoundCheckbox from 'rn-round-checkbox';
import SocialButton from 'rtg-rn-social-buttons';
import FacebookLoginButton from '../../components/SocialLogin/FacebookLoginButton';
import GoogleLoginButton from '../../components/SocialLogin/GoogleLoginButton';

// import FlatListSlider from '../../components/FlatSlider/FlatListSlider';
// import Preview from './src/Preview';

// @ts-ignore
const ImagePath = require('../../images/Recraftsoppify_aap_bg_effect.png');
const slides = [
  {
    image: require('../../images/login_slider/slider1.png'),
  },
  {
    image: require('../../images/login_slider/slider2.png'),
  },
  {
    image: require('../../images/login_slider/slider3.png'),
  },
];

interface Props extends RouteComponentProps {
  dispatch: Dispatch;
  history;
}

const Login: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const [isKeepLogin, setIsKeepLogin] = useState(false);

  const backButton = () => {
    history.push('/');
  };

  const submitButton = () => {
    history.push('/MyWallet');
  };

  const goToSignup = () => {
    history.push('/createAccount');
  };

  const gotoForgotPassword = () => {
    history.push('/forgotPassword');
  };

  const _renderItem = ({item}) => {
    return (
      <View style={style.sliderContainer}>
        <Image source={item.image} style={[style.sliderImage]} />
      </View>
    );
  };

  return (
    <ImageBackground style={{width: '100%', height: '100%'}}>
      <TouchableOpacity onPress={backButton}>
        <MaterialIcon
          name="chevron-left-circle-outline"
          size={30}
          color={theme.textColor}
          style={style.backIcon}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={style.container}>
          <View style={style.topContainer}>
            <Image
              source={constants.mondysLogoBlack}
              style={[style.logoImage]}
            />
          </View>

          <View style={[style.childContainer, style.titleContainer]}>
            <Text
              style={[style.promotionText, style.mondyText]}
              styleKey="textColor">
              {'Mandy’s'}
            </Text>
            <Text style={style.promotionText}>{'Promotion'}</Text>
          </View>

          <View style={style.secondContainer}>
            <AppIntroSlider
              renderItem={this._renderItem}
              data={slides}
              showNextButton={false}
              showDoneButton={false}
              // style={style.slider}
              dotStyle={style.dotStyle}
              activeDotStyle={style.dotActiveStyle}
            />
            {/* <FlatListSlider 
              data={slides} 
              imageKey={'banner'}
              local
            /> */}
          </View>

          <View style={style.childContainer}>
            <TextInput
              style={[
                style.inputContainer,
                {
                  borderBottomColor: theme.inputBorderColor,
                  color: theme.textColor,
                },
              ]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={'Email'}
            />
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[
                style.inputContainer,
                {
                  borderBottomColor: theme.inputBorderColor,
                  color: theme.textColor,
                },
              ]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
          <View style={[style.childContainer, style.forgotPasswordContainer]}>
            <View style={style.checkboxContainer}>
              <RoundCheckbox
                size={18}
                checked={isKeepLogin}
                onValueChange={setIsKeepLogin}
                borderColor="#FE8787"
                backgroundColor="#FE8787"
              />
              <Text style={style.keepLoginLabel}>Keep me logged in</Text>
            </View>
            <ThemedText
              style={style.forgotPassword}
              styleKey="textColor"
              onPress={gotoForgotPassword}>
              {'Forgot Password?'}
            </ThemedText>
          </View>

          <View style={style.largeContainer}>
            <RoundButton
              label={'Login'}
              buttonStyle={{minWidth: 230, width: '100%'}}
              onPress={submitButton}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              <View>
                <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>

            {/* <SocialButton type='facebook' text='Login With Facebook' opacity={0.5} height={40} width={220} action={this.alertme}/> */}
            <FacebookLoginButton
              label={'Login with Facebook'}
              buttonStyle={{minWidth: 230, width: '100%'}}
              onPress={submitButton}
            />
            <GoogleLoginButton
              label={'Login with Google'}
              buttonStyle={{minWidth: 230, width: '100%'}}
              onPress={submitButton}
            />
          </View>

          <View style={style.childContainer}>
            <ThemedText style={style.footerText} styleKey="textColor">
              {'Don’t have an account?'}
            </ThemedText>
            <Text
              style={[style.footerText, style.signupText]}
              onPress={goToSignup}>
              {'Sign Up'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

interface Style {
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  backIcon: ViewStyle;

  logoImage: ViewStyle;
  secondContainer: ViewStyle;
  sliderContainer: ViewStyle;
  sliderImage: ViewStyle;
  promotionText: TextStyle;
  mondyText: TextStyle;
  dotStyle: ViewStyle;
  dotActiveStyle: ViewStyle;
  titleContainer: ViewStyle;

  checkboxContainer: ViewStyle;
  checkbox: ViewStyle;
  keepLoginLabel: ViewStyle;
  forgotPasswordContainer: ViewStyle;
  largeContainer: ViewStyle;
  footerText: TextStyle;
  signupText: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    // flex: 1,
    flexDirection: 'column',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    // flex : 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth: 1,
  },
  inputLabel: {
    width: '100%',
    fontSize: 13,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#FE8787',
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    elevation: 6,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: 'center',
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 25,
  },

  logoImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
  },
  secondContainer: {
    // flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: 150,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  sliderImage: {
    top: 0,
    marginTop: 0,
    borderRadius: 13,
  },

  promotionText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  mondyText: {
    color: '#FE8787',
    marginRight: 5,
  },
  dotStyle: {
    backgroundColor: '#FF9D9D',
  },
  dotActiveStyle: {
    backgroundColor: '#FE8787',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  keepLoginLabel: {
    marginLeft: 8,
    fontSize: 14,
  },

  forgotPasswordContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },

  largeContainer: {
    width: '80%',
  },
  footerText: {
    marginBottom: 40,
    fontSize: 18,
    color: '#3C3C43',
  },
  signupText: {
    color: '#FE8787',
    marginLeft: 10,
  },
});
