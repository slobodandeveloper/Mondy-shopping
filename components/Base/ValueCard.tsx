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

const ValueCard: React.FunctionComponent<Props> = ({}: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'space-between',
          paddingHorizontal: 50,
          marginVertical: 15,
        }}>
        <TouchableOpacity style={styles.conteiner}>
          <Text style={styles.textStyle}>$200</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.conteiner}>
          <Text style={styles.textStyle}>$300</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.conteiner}>
          <Text style={styles.textStyle}>$50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.conteiner, {borderStyle: 'dashed'}]}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ValueCard;

interface Style {
  conteiner: ViewStyle;
  img: TextStyle;
  textStyle: TextStyle;
}

const styles: Style = StyleSheet.create<Style>({
  conteiner: {
    justifyContent: 'center',
    width: '20%',
    height: 35,
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    borderColor: '#D8D8D8',
    // backgroundColor: 'red',
  },
  img: {
    width: 40,
    height: 40,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.poppins_500,
    fontSize: 12,
  },
});
