import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Images } from '../constants';


const getImageSource = type => {
    switch (type) {
        case 'Rock':
            return Images.rock;
        case 'Paper':
            return Images.paper;
        case 'Scissors':
            return Images.scissors;
        default:
            break;
    }
};

const ImageButton = props => {
    return (
        <TouchableOpacity style={styles.imageButton} onPress={props.onPress()}>
            <Image style={styles.image} source={getImageSource(props.type)}/>
        </TouchableOpacity>
    )
};

ImageButton.propTypes = {
    type: PropTypes.string,
    onPress: PropTypes.func
};

const styles = {
    imageButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: Colors.transparentWhite,
        borderColor: Colors.black,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5
    },
    image: {
        height: 50,
        width: 50
    }
};

export default ImageButton;