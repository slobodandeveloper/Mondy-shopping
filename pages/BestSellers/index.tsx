import React, {useState} from 'react';
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
  Image,
  Text,
} from 'react-native';

import {AppLanguage} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import Header from '../../components/Base/Header';
import FooterNavigation from '../Footer/Index';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../assets/colors/Colors';
import {Fonts} from '../../assets/fonts/fontsFamily';
interface Props extends RouteComponentProps {
  history;
}

const BestSellers: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const goToHome = () => {
    history.push('/');
  };

  const goToDetails = () => {
    history.push('/OrderDetail');
  };

  return (
    <View style={style.mainContainer}>
      <Header
        onPress={goToHome}
        isBack={true}
        isLogo={true}
        pageName={'Best Sellers'}
      />
      <ScrollView
        contentContainerStyle={
          {
            // justifyContent: 'center',
            // alignItems: 'center',
          }
        }>
        <View
          style={{
            flexDirection: 'row',
            padding: 25,
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../images/Filter.png')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.pink,
                fontFamily: Fonts.poppins_500,
                fontSize: 10,
              }}>
              SALADS
            </Text>
            <Image
              source={require('../../images/downArrow.png')}
              style={{
                height: 8,
                width: 14,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.pink,
                fontFamily: Fonts.poppins_500,
                fontSize: 10,
              }}>
              BOWLS
            </Text>
            <Image
              source={require('../../images/downArrow.png')}
              style={{
                height: 8,
                width: 14,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.pink,
                fontFamily: Fonts.poppins_500,
                fontSize: 10,
              }}>
              DRINKS
            </Text>
            <Image
              source={require('../../images/downArrow.png')}
              style={{
                height: 8,
                width: 14,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../images/filter2.png')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={goToDetails}
        style={{
          bottom: 50,
          padding: 25,
          left: 20,
        }}>
        <Image
          source={require('../../images/play.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </TouchableOpacity>
      <FooterNavigation history={history} selected={3} />
    </View>
  );
};

export default BestSellers;

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
