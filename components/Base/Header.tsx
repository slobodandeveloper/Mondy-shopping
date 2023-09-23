import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Image,
  Text,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {AppTheme} from '../../config/DefaultConfig';
import ThemedText from '../UI/ThemedText';
import {Fonts} from '../../assets/fonts/fontsFamily';
import {Colors} from '../../assets/colors/Colors';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  isBack?: any;
  isLogo?: any;
  pageName?: any;
}

const Header: React.FunctionComponent<Props> = ({
  onPress,
  isBack,
  isLogo,
  pageName,
}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 25,
          alignItems: 'center',
        }}>
        {isBack ? (
          <TouchableOpacity
            style={{
              width: '20%',
            }}
            onPress={onPress}>
            <Image
              source={require('../../images/back.png')}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: '20%',
            }}></TouchableOpacity>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          {isLogo ? (
            <Image
              source={require('../../images/logo.png')}
              style={{
                height: 60,
                width: 200,
              }}
              resizeMode="cover"
            />
          ) : null}
        </View>
      </View>
      {pageName ? (
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: Colors.black,
            fontSize: 16,
            textAlign: 'center',
          }}>
          {pageName}
        </Text>
      ) : null}
    </>
  );
};

export default Header;

interface Style {
  container: ViewStyle;
  userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 45,
    borderWidth: 1,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    elevation: 6,
    minWidth: 30,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  userNameStyle: {
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
  },
});
