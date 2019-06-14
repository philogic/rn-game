import React, { Component } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    PlayField,
    MidField,
    ImageButtonContainer,
    ScoreBoard,
    Player
} from './components'
import { Colors } from './constants';



export default class App extends Component() {
    state = {
        humanScore: 0,
        computerScore: 0
    };
    render(){
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
                    <Player playername={players[1]}/>
                    <MidField/>
                    <Player playername={players[0]}/>
                </LinearGradient>
            </View>
        );
    }

}

const choices = ['Rock', 'Paper', 'Scissors'];
const players = ['Human', 'Computer'];

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
