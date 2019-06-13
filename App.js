import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import {
    PlayField,
    MidField,
    ImageButtonContainer,
    ScoreBoard
} from './components'
import { Colors } from './constants';

const players = ['Human', 'Computer'];

const onPressImageButton = () => {
    console.log("Button pressed!")
};

export default function App() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.lightGreen, Colors.mediumGreen]} style={styles.gradientField}>
                <PlayField playerType={players[1]}>
                    <ScoreBoard playerType={players[1]}/>
                </PlayField>
                <PlayField playerType={players[0]}>
                    <ScoreBoard playerType={players[0]}/>
                    <ImageButtonContainer
                        buttons={choices}
                        onPress={onPressImageButton}
                    />
                </PlayField>
                <MidField/>
            </LinearGradient>
        </View>
    );
}

const choices = ['Rock', 'Paper', 'Scissors'];

const styles = {
    container: {
        flex: 1
    },
    gradientField: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.white
    }
};
