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
  Text,
  Image,
  ImageBackground,
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
import HeaderProfile from '../../components/Base/HeaderProfile';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ClientProfile from '../../components/Base/ClientProfile';
import Card from '../../components/Base/Card';
import ValueCard from '../../components/Base/ValueCard';
import BarChart from '../../components/Base/BarChart';
import TransactionComponent from '../../components/Base/TransactionComponent';
interface Props extends RouteComponentProps {
  history;
}

const Statistics: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedShop, setSelectedShop] = useState(null); // State for the selected shop
  const [showShopDetails, setShowShopDetails] = useState(false); // State to show shop details
  const [carouselImages, setCarouselImages] = useState([
    require('../../images/carWallet.png'),
    require('../../images/carWallet.png'),
    require('../../images/carWallet.png'),
  ]); // State for carousel images
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

  const goToHome = () => {
    history.push('/home');
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };
  const goToWallet = () => {
    history.push('/MyWallet');
  };
  const targetData = [
    [50, 20],
    [40, 30],
    [80, 40],
    [20, 55],
    [12, 30],
    [50, 10],
    [50, 70],
    [99, 80],
    [100, 20],
    [60, 50],
    [70, 80],
    [10, 90],
  ];

  const leftValues = [0, 20, 40, 60, 80, 100]; // Example left side values
  const bottomValues = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]; // Example bottom side values
  const barColors = ['#FE8787', '#FFE9E9']; //

  return (
    <View style={styles.mainContainer}>
      <Header
        onPress={goToWallet}
        isBack={true}
        isLogo={true}
        pageName={'Statistics'}
      />
      <ScrollView>
        <HeaderProfile />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#555555',
                fontFamily: Fonts.poppins_400,
                fontSize: 14,
              }}>
              Total Rewards
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontFamily: Fonts.poppins_600,
                fontSize: 24,
                marginTop: 5,
              }}>
              256,204
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/arrowUp.png')}
                style={{
                  height: 15,
                  width: 15,
                }}
              />
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: Fonts.poppins_500,
                  fontSize: 10,
                  marginLeft: 5,
                }}>
                10.32%
              </Text>
              <Image
                source={require('../../images/arrowDown.png')}
                style={{
                  height: 15,
                  width: 15,
                  marginLeft: 5,
                }}
              />
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: Fonts.poppins_500,
                  fontSize: 10,
                  marginLeft: 5,
                }}>
                2.58%
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                backgroundColor: '#FE8787',
                padding: 5,
                borderRadius: 10,
                paddingHorizontal: 15,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.poppins_400,
                  fontSize: 14,
                  marginLeft: 5,
                }}>
                Yearly
              </Text>
              <Image
                source={require('../../images/btnDown.png')}
                style={{
                  height: 15,
                  width: 15,
                  marginLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BarChart
            data={targetData}
            leftValues={leftValues}
            bottomValues={bottomValues}
            barColors={barColors}
          />
        </ScrollView>
        <Text
          style={{
            fontFamily: Fonts.poppins_600,
            color: Colors.black,
            fontSize: 12,
            marginTop: 25,
            marginHorizontal: 30,
          }}>
          Recent transactions
        </Text>
        <TransactionComponent />
      </ScrollView>
      <View
        style={{
          marginTop: 50,
        }}
      />

      <FooterNavigation history={history} selected={2} />
    </View>
  );
};

export default Statistics;

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

const styles: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
