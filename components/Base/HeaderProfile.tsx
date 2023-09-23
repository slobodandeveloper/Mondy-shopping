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

interface Props {}

const HeaderProfile: React.FunctionComponent<Props> = ({}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 25,
          alignItems: 'center',
          marginTop: 25,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('../../images/myWalletProfile.png')}
              style={{
                height: 40,
                width: 40,
              }}
            />
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: '#24BE74',
                borderRadius: 10,
                position: 'absolute',
                bottom: 0,
                right: 0,
                borderWidth: 1,
                borderColor: '#FFFFFF',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: Fonts.poppins_500,
                fontSize: 16,
                color: Colors.black,
                marginLeft: 5,
              }}>
              Jon Martin
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Image
              source={require('../../images/notificationWallet.png')}
              style={{
                height: 40,
                width: 40,
              }}
            />
            <View
              style={{
                height: 15,
                width: 15,
                backgroundColor: '#FF0000',
                borderRadius: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                borderWidth: 1,
                borderColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 8,
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}>
                2
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderProfile;

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
