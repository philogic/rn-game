const genAlert = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return messages[0];
    } else if (
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 2 && computerChoice === 0)
    ) {
        return messages[1];
    } else if (
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 0 && computerChoice === 1)
    ) {
        return messages[2];
    } else if (
        (humanChoice === 2 && computerChoice === 1) ||
        (humanChoice === 1 && computerChoice === 2)
    ) {
        return messages[3];
    } else {
        throw 'Invalid inputs';
    }
};



const messages = ['Draw', 'Rock crushes Scissors', 'Paper covers Rock', 'Scissors cut Paper'];

export default genAlert;