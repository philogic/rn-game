import React from 'react';
import { Dimensions, View } from 'react-native';


const fieldHalfStyle = playerType => {
    if (playerType === 'Human'){
        return styles.lowerHalf
    } else if (playerType === 'Computer'){
        return styles.upperHalf
    }
};

const PlayField = props => {
    return (
        <View style={[styles.halfField, fieldHalfStyle(props.playerType)]}>
            {props.children}
        </View>
    )
};


const { height, width } = Dimensions.get('window');

const styles = {
  halfField: {
      height: height / 2,
      width: width,
  },
  upperHalf: {
      justifyContent: 'flex-end'
  },
  lowerHalf: {
      justifyContent: 'space-between'
  }
};

export default PlayField;