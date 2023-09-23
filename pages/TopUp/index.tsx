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
  TextInput,
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
import ValueCard from '../../components/Base/ValueCard';
import VisaCards from '../../components/Base/VisaCards';
import RoundButton from '../../components/Base/RoundButton';

interface Props extends RouteComponentProps {
  history;
}

const TopUp: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToWallet = () => {
    history.push('/MyWallet');
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <View style={style.mainContainer}>
      <Header
        onPress={goToWallet}
        isBack={true}
        isLogo={true}
        pageName={'Top Up'}
      />
      <ScrollView>
        <Image
          source={require('../../images/topUpMain.png')}
          resizeMode="cover"
          style={{height: 150, width: 300, alignSelf: 'center', marginTop: 25}}
        />
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: Colors.black,
            fontSize: 12,
            marginTop: 25,
            marginHorizontal: 30,
          }}>
          Payment method
        </Text>
        <VisaCards />
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: Colors.black,
            fontSize: 12,
            marginTop: 25,
            marginHorizontal: 30,
          }}>
          Select top-up value
        </Text>
        <ValueCard />
        <View
          style={{
            marginTop: 25,
          }}>
          <TextInput
            placeholder="Enter Specific Value"
            style={{
              borderBottomWidth: 1,
              width: '70%',
              alignSelf: 'center',
              borderColor: 'rgba(0,0,0,0.4)',
              paddingVertical: 5,
              fontFamily: Fonts.poppins_500,
              fontSize: 12,
              color: 'rgba(0,0,0,0.4)',
            }}
          />
        </View>
        <RoundButton
          label={'Top Up'}
          buttonStyle={{
            minWidth: 250,
            width: '65%',
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
      </ScrollView>
      <FooterNavigation history={history} selected={2} />
    </View>
  );
};

export default TopUp;

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
