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
import {RouteComponentProps} from 'react-router-native';

interface Props extends RouteComponentProps {
  history?: any;
}
const ClientProfile: React.FunctionComponent<Props> = ({history}: Props) => {
  const theme: AppTheme = useTheme();
  const goToTopUp = () => {
    history.push('/TopUp');
  };

  const goToStatistics = () => {
    history.push('./Statistics');
  };
  const goToPortfolio = () => {
    history.push('./Portfolio');
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        <TouchableOpacity onPress={goToTopUp} style={styles.conteiner}>
          <Image
            source={require('../../images/TopUp.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.textStyle}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToStatistics} style={styles.conteiner}>
          <Image
            source={require('../../images/Graph.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.textStyle}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPortfolio} style={styles.conteiner}>
          <Image
            source={require('../../images/Paper.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.textStyle}>Portfolio</Text>
        </TouchableOpacity>
        <View style={styles.conteiner}>
          <Image
            source={require('../../images/dots.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.textStyle}>Stake</Text>
        </View>
      </View>
    </>
  );
};

export default ClientProfile;

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
    width: 30,
    height: 30,
  },
  textStyle: {
    color: 'black',
    marginTop: 10,
    fontFamily: Fonts.poppins_400,
    fontSize: 10,
  },
});
