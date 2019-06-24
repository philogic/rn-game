import React from 'react';
import { View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import {
    PlayField,
    MidField,
    ImageButtonContainer,
    ScoreBoard,
    Player
} from './components'
import { Colors } from './constants';
import {
    calcWinner,
    genAlert,
    genComputerChoice
} from './logic'



export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    state = {
        game: 1,
        round: 1,
        humanScore: 0,
        computerScore: 0
    };

    onPressImageButton(humanChoice) {
        const computerChoice = genComputerChoice();
        const winner = calcWinner(humanChoice, computerChoice);
        this.showAlert(winner, humanChoice, computerChoice);
    }

    increaseGameId(){
        this.setState({
            game: this.state.game + 1
        });
    }

    increaseRoundId(){
        if (this.state.game % 10 === 0){
            const { round, computerScore, humanScore } = this.state;
            this.saveDataToFirebase(round, computerScore, humanScore);
            this.setState({
                round: round + 1,
                computerScore: 0,
                humanScore: 0
            });
            Alert.alert('New round begins!')
        }
    }

    saveDataToFirebase(round, computerScore, humanScore){
        firebase
            .database()
            .ref('/Games')
            .push({
                round,
                humanScore,
                computerScore
            })
    }

    showAlert(winner, humanChoice, computerChoice) {
        const alertMessage = genAlert(humanChoice, computerChoice);
        Alert.alert(
            `${winner} wins!`,
            `Human chose ${choices[humanChoice]}
            \nComputer chose ${choices[computerChoice]}
            \n${alertMessage}.`,
            [{text: 'OK', onPress: () => this.addPoints(winner)}]
        )

    }

    addPoints(winner) {
        switch (winner) {
            case 'Human':
                this.setState({
                    humanScore: this.state.humanScore + 1
                });
                break;
            case 'Computer':
                this.setState({
                    computerScore: this.state.computerScore + 1
                });
                break;
            default:
                break;
        }
        this.increaseGameId();
        this.increaseRoundId();
    }

    render(){
        return (
            <View style={styles.container}>
                <LinearGradient colors={[Colors.lightGreen, Colors.mediumGreen]} style={styles.gradientField}>
                    <PlayField playerType={players[1]}>
                        <ScoreBoard
                            score={this.state.computerScore}
                            playerType={players[1]}
                        />
                    </PlayField>
                    <PlayField playerType={players[0]}>
                        <ScoreBoard
                            score={this.state.humanScore}
                            playerType={players[0]}/>
                        <ImageButtonContainer
                            buttons={choices}
                            onPress={index => this.onPressImageButton(index)}
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
