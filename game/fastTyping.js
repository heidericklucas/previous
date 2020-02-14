msg = new Array("JavaScript is an interesting programming language.",
    "How do you comfort a JavaScript bug? You console it.",
    "The JavaScript developer was sad because he didn't Node how to Express himself.",
    "I'm starting to wonder if there are more client-side JavaScript frameworks than there are apps that use them.")
numWords = 10
function typeAsFastAsYouCan() {
    randNum = Math.floor((Math.random() * 10)) % 4
    msgType = msg[randNum]
    day = new Date();
    startType = day.getTime();
    document.typingGame.givenSentence.value = msgType
    document.typingGame.typed.focus();
    document.typingGame.typed.select();
}
function dontEvenThinkAboutIt() {
    alert("Where do you think you are going, huh? Copying and pasting is not allowed!");
    document.typingGame.typed.focus();
}
function Results() {
    newDay = new Date();
    endType = newDay.getTime();
    totalTime = ((endType - startType) / 1000)
    result = Math.round((numWords / totalTime) * 60)
    if (document.typingGame.typed.value == document.typingGame.givenSentence.value) {
        alert("\nYou typed a " + numWords + " word sentence in "
            + totalTime + " seconds, which means your typing speed was " + result + " words per minute!")
    }
    else {
        alert("You made a mistake. Please try again.")
    }
}