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
import PortfolioCard from '../../components/Base/PortfolioCard';
interface Props extends RouteComponentProps {
  history;
}

const Portfolio: React.FunctionComponent<Props> = ({history}: Props) => {
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

  return (
    <View style={styles.mainContainer}>
      <Header
        onPress={goToWallet}
        isBack={true}
        isLogo={true}
        pageName={'Portfolio'}
      />
      <ScrollView>
        <View
          style={{
            marginTop: 25,
          }}
        />
        <Card />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            // justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              borderBottomColor: 'rgba(0,0,0,0.15)',
              borderBottomWidth: 1,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'rgba(0,0,0,0.38)',
                fontFamily: Fonts.poppins_400,
                fontSize: 14,
              }}>
              Indbox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              borderBottomColor: '#FE8787',
              borderBottomWidth: 1,
              padding: 10,
            }}>
            <Text
              style={{
                color: '#FE8787',
                fontFamily: Fonts.poppins_400,
                fontSize: 14,
              }}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 25,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
            }}>
            Today
          </Text>
          <PortfolioCard data={todayData} />
          <Text
            style={{
              color: Colors.black,
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
            }}>
            Yesterday
          </Text>
          <PortfolioCard data={yesterdayData} />
          <Text
            style={{
              color: Colors.black,
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
            }}>
            Previous 7 day
          </Text>
          <PortfolioCard data={sevenData} />
        </View>
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

export default Portfolio;

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

const todayData = [
  {
    id: 1,
    title: 'Payment',
    imgs: require('../../images/port1.png'),
    img: require('../../images/paymentStar.png'),
    date: '06.28.2022',
    rate: '-$19.65',
  },
  {
    id: 2,
    title: 'Reward',
    imgs: require('../../images/port2.png'),
    img: require('../../images/RewardStar.png'),
    date: '06.28.2022',
    rate: '+19.65',
  },
];

const yesterdayData = [
  {
    id: 1,
    title: 'Payment',
    imgs: require('../../images/port1.png'),
    img: require('../../images/paymentStar.png'),
    date: '06.28.2022',
    rate: '-$19.65',
  },
];

const sevenData = [
  {
    id: 1,
    title: 'Reward',
    imgs: require('../../images/port2.png'),
    img: require('../../images/RewardStar.png'),
    date: '06.28.2022',
    rate: '+19.65',
  },
];
