import React, {useState} from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';

const data = [
  {id: '1', uri: require('../../images/card1.png')},
  {id: '2', uri: require('../../images/card2.png')},
  {id: '3', uri: require('../../images/card3.png')},
  {id: '4', uri: require('../../images/card1.png')},
  {id: '5', uri: require('../../images/card2.png')},
  {id: '6', uri: require('../../images/card3.png')},
  {id: '7', uri: require('../../images/card1.png')},
  {id: '8', uri: require('../../images/card2.png')},
  {id: '9', uri: require('../../images/card3.png')},
];

const VisaCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={
          index >= activeIndex && index < activeIndex + 3
            ? styles.activeImageContainer
            : styles.inactiveImageContainer
        }>
        <Image source={item.uri} style={styles.image} />
      </View>
    );
  };

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = 100; // Adjust this to the width of your images
    const newActiveIndex = Math.floor(offsetX / itemWidth);
    setActiveIndex(newActiveIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        snapToInterval={100} // Adjust this to the width of your images
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  activeImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  inactiveImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // borderWidth: 2,
    borderColor: 'transparent',
  },
  image: {
    width: 100, // Adjust this to the width of your images
    height: 100, // Adjust this to the height of your images
  },
});

export default VisaCards;
