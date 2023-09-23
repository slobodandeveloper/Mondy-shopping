import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, Alert, TextStyle, TextInput, ImageBackground, ScrollView, TouchableOpacity, Image, Text, CheckBox } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import { AppLanguage } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import RoundCheckbox from 'rn-round-checkbox';
import FacebookLoginButton from '../../components/SocialLogin/FacebookLoginButton';
import GoogleLoginButton from '../../components/SocialLogin/GoogleLoginButton';

// @ts-ignore
const ImagePath = require("../../images/email.png")

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const EmailSent: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const [isKeepLogin, setIsKeepLogin] = useState(false);

  const backButton = () => {
    history.push('/');
  };

  const resend = () =>{

  };

  const gotoLogin = () =>{
    history.push('/login');
  };

  const gotoContactUs = () => {

  };

  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} >
      <TouchableOpacity onPress={backButton}>
        <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.textColor} style={style.backIcon}/>
      </TouchableOpacity>
      <ScrollView>
        <View style={style.container}>
          <View style={style.topContainer}>
            <Image source={constants.mondysLogoBlack} style={[style.logoImage]} />
          </View>

          <View style={[style.childContainer, style.titleContainer]}>
            <Text style={[style.promotionText]} styleKey="textColor">{'Email Sent!'}</Text>
          </View>

          <Text >We’ve sent a password reset link to</Text>
          <Text style={{fontWeight : 'bold'}}>littletimmy@mandys.ca</Text>

          <Image source={ImagePath} style={[{marginTop: 70}]}/>
          
          <View style={style.childContainer}>
            <ThemedText style={style.footerText} styleKey="textColor">
              {'Didnt Receive?'}
            </ThemedText>
            <Text style={[style.footerText, style.signupText]} onPress={resend}>{'Resend'}</Text>
          </View>
          <View style={[style.largeContainer, {top : -20}]} >
            <RoundButton label={'Back to Login'} buttonStyle={{minWidth: 230, width : '100%'}} onPress={gotoLogin} />
          </View>

          <View style={[style.childContainer]}>
            <Text style={[style.footerText, style.signupText]} onPress={gotoContactUs}>{'Contact Us'}</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
};

export default EmailSent;

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
  promotionText : TextStyle;
  titleContainer : ViewStyle;  

  largeContainer : ViewStyle;
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
    justifyContent: "center",
    alignItems: 'center',
  },
  topContainer: {
    // flex : 2,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
    borderWidth : 1,
    borderColor : 'red'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth : 1,

  },
  inputLabel: {
    width: "100%",
    fontSize: 13
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color : '#FE8787',
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },


  logoImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
  },
  
  promotionText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight : 'bold',
    color: '#FE8787',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  largeContainer : {
    width : '80%',
  },
  footerText: {
    marginBottom: 40,
    fontSize: 15,
    color: '#3C3C43',
  },
  signupText: {
    color: '#FE8787',
    marginLeft: 10,
  },
});
