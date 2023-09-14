import React, {Component, createRef} from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

class ChildItem extends Component {

//  static defaultProps = {
//     item,
//     style,
//     onPress,
//     index,
//     imageKey,
//     local,
//     height
//   };

  constructor(props) {
    super(props);
    // this.state = {
    //   index: this.props.initialScrollIndex,
    //   data: this.props.data,
    // };
    // if (Platform.OS === 'android') {
    //   UIManager.setLayoutAnimationEnabledExperimental(true);
    // }
  }

  render() {
    return (
      <Pressable
        style={styles.container}
        onPress={() => onPress(this.props.index)}>
        <Image
          style={[styles.image, this.props.style, {height: this.props.height}]}
          source={this.props.local ? this.props.item[this.props.imageKey] : {uri: this.props.item[this.props.imageKey]}}
        />
      </Pressable>
    );
  }
};

export default ChildItem;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});
