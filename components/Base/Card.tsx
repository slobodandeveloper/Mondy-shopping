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

const Card: React.FunctionComponent<Props> = ({}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.12)',
          elevation: 8,
          borderRadius: 20,
          backgroundColor: '#AEAEC033',
        }}>
        <View
          style={{
            alignItems: 'center',

            padding: 15,
          }}>
          <Text
            style={{
              color: '#677278BD',
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
            }}>
            My card balance ($)
          </Text>
          <Text
            style={{
              color: '#000000',
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
              marginTop: 10,
            }}>
            256.204
          </Text>
        </View>
        <Image
          style={{
            height: 70,
            width: 15,
            alignSelf: 'center',
          }}
          source={require('../../images/line.png')}
        />
        <View
          style={{
            alignItems: 'center',

            padding: 15,
          }}>
          <Text
            style={{
              color: '#677278BD',
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
            }}>
            My reward points
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                color: '#000000',
                fontFamily: Fonts.poppins_600,
                fontSize: 14,
                marginTop: 10,
                textAlign: 'center',
              }}>
              35/100
            </Text>
            <Image
              source={require('../../images/Star.png')}
              style={{
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginTop: 7,
                marginLeft: 2,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Card;

interface Style {
  conteiner: ViewStyle;
  img: TextStyle;
  textStyle: TextStyle;
}

const styles: Style = StyleSheet.create<Style>({
  conteiner: {
    justifyContent: 'center',
    width: '25%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  img: {
    width: 40,
    height: 40,
  },
  textStyle: {
    color: 'black',
    marginTop: 10,
    fontFamily: Fonts.poppins_400,
    fontSize: 10,
  },
});
