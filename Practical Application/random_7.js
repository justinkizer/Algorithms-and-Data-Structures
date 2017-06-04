// Write a function that generates a random integer between 0 and 7, taking in a
// function that generates a random integer between 0 and 5, ensuring the
// output is uniformly distributed.

const RANDOM_7 = random5Function => {
  while (true) {
    let randomNumber = 5 * random5Function() + random5Function();
    if (randomNumber < 21) { return (randomNumber % 7); }
  }
};
