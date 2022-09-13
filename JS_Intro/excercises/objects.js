let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};
programming.languages.push("Go")

programming.difficulty = 7

delete programming.jokes

Object.assign(programming, { isFun: true })
