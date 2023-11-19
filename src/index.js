const messages = [
    "You can’t stop me lovin’ myself",
    "I'm the one I should love in this world",
    "You got the best of me",
    "I believe in me, even if things get hard",
    "Even in the far future, I will continue to hide and seek",
    "We’re all humans, right? What’s the difference?",
    "Cause you love me and I love you",
    "Life is a word that sometimes you cannot say",
    "I’m living because I can’t die",
    "Shine, dream, smile",
    "I want to struggle and fight and at the end of my journey, I want to say I was so beautiful",
    "It’s okay, now count 1, 2, 3 and forget",
];

const btsLyrics = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    btsLyrics
};