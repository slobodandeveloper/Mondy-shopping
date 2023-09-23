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
import RoundButton from '../../components/Base/RoundButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import MapView, {Marker} from 'react-native-maps'; // Import MapView and Marker components from 'react-native-maps'
import Carousel, {Pagination} from 'react-native-snap-carousel';
interface Props extends RouteComponentProps {
  history;
}

const FindStore: React.FunctionComponent<Props> = ({history}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedShop, setSelectedShop] = useState(null); // State for the selected shop
  const [showShopDetails, setShowShopDetails] = useState(false); // State to show shop details
  const [carouselImages, setCarouselImages] = useState([]); // State for carousel images
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

  const handleMarkerPress = shop => {
    // Function to handle marker press
    setSelectedShop(shop); // Set the selected shop
    setShowShopDetails(true); // Show shop details
    setCarouselImages(shop.images); // Set the carousel images
    setActiveSlide(0); // Reset the active slide index to 0
  };

  const onImageClick = () => {
    history.push('./DeliveryTracking');
  };

  const shops = [
    // Shop data
    {
      id: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      name: 'Zomato Shop',
      description: 'A great place to eat!',
      images: [
        require('../../images/car1.png'),
        require('../../images/car1.png'),
        require('../../images/car1.png'),
      ],
      mobile: '123-456-7890',
      status: 'Open',
      close: 'close at 22:00 pm',
    },
  ];

  const goToHome = () => {
    history.push('/home');
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={
            selectedShop
              ? {
                  latitude: selectedShop.latitude,
                  longitude: selectedShop.longitude,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.02,
                }
              : {
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.02,
                }
          }>
          {shops.map(shop => (
            <Marker
              key={shop.id}
              coordinate={{latitude: shop.latitude, longitude: shop.longitude}}
              title={shop.name}
              description={shop.description}
              onPress={() => handleMarkerPress(shop)}
            />
          ))}
        </MapView>

        {showShopDetails &&
          selectedShop && ( // Conditional rendering of shop details
            <View style={styles.shopDetailsContainer}>
              <Carousel
                data={carouselImages}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={onImageClick}>
                    <Image source={item} style={styles.shopImage} />
                  </TouchableOpacity>
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
              <View style={styles.starView}>
                <Image
                  source={require('../../images/pin.png')}
                  style={styles.starimg}
                />
                <Text
                  style={{
                    fontFamily: Fonts.poppins_500,
                    fontSize: 13,
                    color: '#061737',
                  }}>
                  2067 Rue Crescent, Montreal QC
                </Text>
              </View>
              <View style={styles.starView}>
                <Image
                  source={require('../../images/Star.png')}
                  style={styles.starimg}
                />
                <Image
                  source={require('../../images/Star.png')}
                  style={styles.starimg}
                />
                <Image
                  source={require('../../images/Star.png')}
                  style={styles.starimg}
                />
                <Image
                  source={require('../../images/Star.png')}
                  style={styles.starimg}
                />
                <Image
                  source={require('../../images/Star.png')}
                  style={styles.starimg}
                />
                <Text
                  style={{
                    fontFamily: Fonts.poppins_500,
                    fontSize: 14,
                    color: 'rgba(0,0,0,0.42)',
                  }}>
                  (59)
                </Text>
              </View>
              <View style={styles.descriptionview}>
                <Text
                  style={[
                    styles.shopDescription,
                    {color: '#00623B', fontFamily: Fonts.poppins_500},
                  ]}>
                  {selectedShop?.status}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.poppins_500,
                    fontSize: 14,
                    marginLeft: 15,
                    color: 'rgba(0,0,0,0.26)',
                    textAlign: 'center',
                  }}>
                  {selectedShop?.close}
                </Text>
              </View>
            </View>
          )}
        <View>
          <FooterNavigation history={history} selected={5} />
        </View>
      </View>
    </>
  );
};

export default FindStore;

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
  shopDetailsContainer: ViewStyle;
  starView: ViewStyle;
}

const styles: Style = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  shopDetailsContainer: {
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 80,
  },
  shopImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contian',
    marginBottom: 10,
    borderRadius: 10,
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shopMobile: {
    fontSize: 18,
    marginBottom: 10,
  },
  shopDescription: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  descriptionview: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  starimg: {width: 20, height: 20, marginHorizontal: 5},
  starView: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
});
