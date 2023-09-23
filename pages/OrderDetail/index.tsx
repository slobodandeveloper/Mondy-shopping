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

interface Props extends RouteComponentProps {
  history;
}

const OrderDetail: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const goToHome = () => {
    history.push('/BestSellers');
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <View style={style.mainContainer}>
      <Header onPress={goToHome} isBack={true} isLogo={false} />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            // alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <Image
            source={require('../../images/order.png')}
            style={{
              height: 180,
              width: 180,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontFamily: Fonts.poppins_600,
              color: Colors.black,
              fontSize: 24,
              marginTop: 15,
              textAlign: 'left',
            }}>
            Seared Tuna Salad
          </Text>
          <Text
            style={{
              fontFamily: Fonts.poppins_400,
              color: 'rgba(0,0,0,0.6)',
              fontSize: 12,
            }}>
            mixed greens, arugula, kale, avocado, cucumber, edamame, super slaw,
            tempura onions,apples, toasted sesame seeds, spicy togarashi seared
            tuna
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: Fonts.poppins_400,
                color: '#FF4949DE',
                fontSize: 10,
              }}>
              See more
            </Text>
          </TouchableOpacity>

          <View
            style={{
              height: 1,
              backgroundColor: 'rgba(1,1,1,0.5)',
              marginTop: '20%',
              marginBottom: 25,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.poppins_600,
                color: '#00623B',
                fontSize: 16,
                textAlign: 'center',
              }}>
              $ 24.00
            </Text>
            <View
              style={{
                backgroundColor: '#AEAEC033',
                width: '50%',
                borderRadius: 100,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../images/plus.png')}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: Fonts.poppins_500,
                  textAlign: 'center',
                  fontSize: 14,
                }}>
                1
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../../images/minus.png')}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: '30%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#AEAEC033',
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                padding: 15,
                borderRightWidth: 0.2,
              }}>
              <Image
                source={require('../../images/cart.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#677278',
                  fontFamily: Fonts.poppins_600,
                  fontSize: 14,
                }}>
                Add to cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#AEAEC033',
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                padding: 15,
              }}>
              <Image
                source={require('../../images/done.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: '#FF6B6B',
                  fontFamily: Fonts.poppins_600,
                  fontSize: 14,
                }}>
                Order now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FooterNavigation history={history} selected={3} />
    </View>
  );
};

export default OrderDetail;

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
