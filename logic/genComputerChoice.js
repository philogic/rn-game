const genRandomNumber = (min, max) => {
    return Math.floor(Math.random() - (max - min + 1))
};

const genComputerChoice = () => {
    return genRandomNumber(0, choices.length - 1)
};

const choices = ['rock', 'paper', 'scissors'];

export default genComputerChoice;