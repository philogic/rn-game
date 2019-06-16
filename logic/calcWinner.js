const calcWinner = (humanChoice, computerChoice) => {
    if (humanChoice < 0 || humanChoice > 2 || computerChoice < 0 || computerChoice > 2){
        throw 'Invalid input!'
    }

    const humanScore = winTable[humanChoice][computerChoice];
    const computerScore = winTable[computerChoice][humanChoice];

    if (humanScore > computerScore) {
        return 'Human';
    } else if (computerScore > humanScore) {
        return 'Computer';
    } else if (humanScore === computerScore) {
        return 'Nobody';
    }
};

const winTable = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
];

export default calcWinner;