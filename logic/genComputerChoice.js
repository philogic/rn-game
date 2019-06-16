const genRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genComputerChoice = () => {
    return genRandomNumber(0, choices.length - 1)
};

const choices = ['Rock', 'Paper', 'Scissors'];

export default genComputerChoice;