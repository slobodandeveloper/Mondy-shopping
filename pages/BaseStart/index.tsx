import React from 'react';
import {RouteComponentProps} from 'react-router-native';
import {connect} from 'react-redux';
import {setThemeAction} from '../../store/reducers/config';
import {Dispatch} from 'redux';
import {AppTheme, AppConstants} from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import RoundButton from '../../components/Base/RoundButton';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ThemedText from '../../components/UI/ThemedText';

// @ts-ignore
const ImagePath = require('../../images/Recraftsoppify_app_dashboard.jpg');
const slides = [
  {
    key: 1,
    title: 'GOURMET',
    title2: 'SALADS',
    text: 'Nothing a Mandy’s Salad can’t fix!',
    image: require('../../images/start_slider/slider1.png'),
    // backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'WE DELIVER',
    text:
      'Get your favourite salads, smoothies, lemonades and more right at your door!',
    image: require('../../images/start_slider/slider2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'LEMONADES',
    text:
      'Summer is here and so is nostalgia!  Try our lemonades with a Mandy’s Twist.',
    image: require('../../images/start_slider/slider3.png'),
    backgroundColor: '#22bcb5',
  },
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props extends RouteComponentProps {
  dispatch: Dispatch;
  history;
}

const BaseStart: React.FunctionComponent<Props> = ({
  dispatch,
  history,
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToSignUp = () => {
    // history.push('/createAccount');
    history.push('/login');
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme));

  _renderItem = ({item}) => {
    return (
      <View style={style.sliderContainer}>
        <Image source={item.image} style={[style.sliderImage]}/>
        <Text style={[style.sliderTitle]}>{item.title}</Text>
        <Text style={[style.sliderText]}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      {/* <ThemeToggle updateTheme={updateTheme} /> */}
      {/* <ImageComponent src={constants.recraftLogo}/> */}
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: theme.primaryColor,
        }}>
        <View style={style.topContainer}>
          <Image source={constants.mondysLogoWhite} style={[style.logoImage]} />
        </View>
        <View style={style.secondContainer}>
          <AppIntroSlider
            renderItem={this._renderItem}
            data={slides}
            showNextButton={false}
            showDoneButton={false}
            style={style.slider} 
          />
        </View>
        
        <View style={style.bottomContainer}>
          
          <View style={style.childContainer}>
            <RoundButton
              buttonStyle={style.startButton}
              label="Get Started"
              onPress={goToSignUp}
            />
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.footerText} styleKey="textColor">
              {'Already have an account?'}
            </ThemedText>
            <Text style={[style.footerText, style.loginText]} onPress={goToLogin}>{'Log In'}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default connect(({dispatch}) => ({dispatch}))(BaseStart);

interface Style {
  mainContainer: ViewStyle;
  container: ViewStyle;
  topContainer: ViewStyle;
  secondContainer: ViewStyle;
  childContainer: ViewStyle;
  inputContainer: TextStyle;
  footerText: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  startButton: ViewStyle;
  logoImage: ViewStyle;

  newItemList: ViewStyle;
  newItemListLabel: ViewStyle;
  newItem: ViewStyle;
  leftLabel: TextStyle;
  rightLabel: TextStyle;
  loginText: TextStyle;

  sliderContainer : ViewStyle;
  slider : ViewStyle;
  sliderTitle : ViewStyle;
  sliderText : ViewStyle;
  sliderImage : ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logoImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
  },
  topContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  secondContainer: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
    margin: 0,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButton: {
    top : -10,
    backgroundColor : '#FE8787',
    marginBottom: 22,
    fontWeight : 'bold',
    minWidth: 200,
    borderRadius: 20,
    borderWidth: 0,
  },
  
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    marginBottom: 40,
    fontSize: 18,
    color: '#3C3C43',
  },
  loginText: {
    color: '#fff',
    marginLeft: 10,
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: 'center',
  },
  slider: {
    width:'100%',
    height:'100%',
    flexDirection: 'row',
  },

  sliderImage: {
    top: 0,
    marginTop:0,
    borderColor:'red',
  },

  sliderTitle: {
    marginTop: 30,
    color: '#FE8787',
    fontSize : 34,
    fontWeight : 'bold',
    textTransform: 'uppercase',
  },

  sliderText : {
    color : '#000',
    fontSize : 14,
    textAlign:'center',
    paddingLeft: 50,
    paddingRight : 50,
    marginTop : 20,
  },
});
