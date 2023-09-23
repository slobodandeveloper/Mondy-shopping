import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Fonts} from '../../assets/fonts/fontsFamily';
import {Colors} from '../../assets/colors/Colors';
const renderItem = ({item}) => {
  return (
    <>
      <View style={styles.conteiner}>
        <View>
          <Image source={item.imgs} style={styles.imgStyle} />
        </View>
        <View style={styles.textConteiner}>
          <Text
            style={{
              fontFamily: Fonts.poppins_600,
              fontSize: 14,
              color: Colors.black,
              marginBottom: 5,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.poppins_500,
              fontSize: 12,
              color: 'rgba(0,0,0,0.60)',
            }}>
            {item.date}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: Fonts.poppins_500,
              fontSize: 12,
              color: Colors.black,
              marginBottom: 5,
            }}>
            {item.rate}
          </Text>
          <Image
            source={item.img}
            style={{width: 50, height: 15, borderRadius: 20}}
          />
        </View>
      </View>
    </>
  );
};
const PortfolioCard = props => {
  return (
    <View
      style={
        {
          // paddingHorizontal: 25,
        }
      }>
      <FlatList
        keyExtractor={item => item.id}
        data={props?.data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  imgStyle: {
    width: 55,
    height: 55,
    borderRadius: 60,
  },
  textConteiner: {
    width: '60%',
    alignSelf: 'center',
  },
});

export default PortfolioCard;
