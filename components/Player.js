import React from 'react';
import { Dimensions, Text } from 'react-native';

import { Colors } from '../constants';

const getPlayerNameStyle = (playerType) => {
    if (playerType === 'Human') {
        return styles.lowerHalfPlayerName;
    } else if (playerType === 'Computer') {
        return styles.upperHalfPlayerName;
    }
};


const Player = ({ playername }) => {
    return <Text style={[styles.playerName, getPlayerNameStyle(playername)]}>{playername}</Text>
};


const { height } = Dimensions.get('window');
const styles = {
    playerName: {
        position: 'absolute',
        left: 8,
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: Colors.transparent,
        color: Colors.white
    },
    upperHalfPlayerName: {
        top: height / 2 - 23,
    },
    lowerHalfPlayerName: {
        top: height / 2 + 3
    }
};

export default Player;