import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
const renderItem = ({item}) => {
  return (
    <>
      <View style={styles.conteiner}>
        <View>
          <Image source={item.imgs} style={styles.imgStyle} />
        </View>
        <View style={styles.textConteiner}>
          <Text style={{fontWeight: '600'}}>{item.title}</Text>
          <Text style={{color: 'gray'}}>{item.time}</Text>
        </View>
        <View>
          <Text style={{color: 'gray'}}>{item.rate}</Text>
        </View>
      </View>
    </>
  );
};
const TransactionComponent = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  textConteiner: {
    width: '60%',
    alignSelf: 'center',
  },
});

export default TransactionComponent;

export const DATA = [
  {
    id: 1,
    title: 'Seared Tuna Salad',
    imgs: require('../../images/trans1.png'),
    time: 'Today,17:45 PM',
    rate: '-$28.96',
  },
  {
    id: 2,
    title: 'Mandys Lemonade -Matcha',
    imgs: require('../../images/trans2.png'),
    time: 'Today,17:45 PM',
    rate: '-$4.96',
  },
];
