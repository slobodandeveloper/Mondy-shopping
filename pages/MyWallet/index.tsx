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
interface Props extends RouteComponentProps {
  history;
}

const MyWallet: React.FunctionComponent<Props> = ({history}: Props) => {
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

  return (
    <View style={styles.mainContainer}>
      <Header isBack={true} isLogo={true} pageName={'My Wallet'} />
      <ScrollView>
        <ImageBackground
          source={require('../../images/pinkBg.png')}
          resizeMode="cover"
          tintColor={'#FFBEBE'}
          style={{
            height: 420,
            width: '100%',
          }}>
          <HeaderProfile />
          <View
            style={{
              // alignContent: 'center',
              // justifyContent: 'center',
              // alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Carousel
              data={carouselImages}
              renderItem={({item}) => (
                <Image
                  source={item}
                  style={{
                    height: 300,
                    width: '100%',
                    alignSelf: 'center',
                  }}
                  resizeMode="contain"
                />
              )}
              sliderWidth={500}
              itemWidth={400}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
              onSnapToItem={index => setActiveSlide(index)} // Update active slide index
            />
            <Pagination
              dotsLength={carouselImages.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationInactiveDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </ImageBackground>
        <Card />
        <View
          style={{
            marginTop: 50,
          }}
        />
        <ClientProfile history={history} />
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

export default MyWallet;

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
