import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../constants';


const getScoreContainerStyle = playerType => {
    if (playerType === 'Human'){
        return styles.humanScoreContainer
    } else if (playerType === 'Computer'){
        return styles.computerScoreContainer
    }
};

const ScoreBoard = props => {
    return (
        <View style={[styles.scoreContainer, getScoreContainerStyle(props.playerType)]}>
            <Text style={styles.score}>{props.score}</Text>
        </View>
    )
};


ScoreBoard.propTypes = {
    score: PropTypes.number,
    playerType: PropTypes.string,
};


const styles = {
    scoreContainer: {
        width: 100,
        height: 50,
        backgroundColor: Colors.transparentBlack,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.white,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.4,
    },
    humanScoreContainer: {
        borderWidth: 3,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    computerScoreContainer: {
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    score: {
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: Colors.transparent,
        color: Colors.white,
    },
};

export default ScoreBoard;