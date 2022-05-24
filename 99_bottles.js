function bottleSong(num) {
  const number = num
  for (let i = num; i > 1; i--) {
    console.log(i + " bottles of beer on the wall, " + num + " bottles of beer");
    num--;
    console.log("Take one down and pass it around, " + num + " bottles of beer on the wall.")
}
console.log("1 bottle of beer on the wall, 1 bottle of beer.");
console.log("Take one down and pass it around, no more bottles of beer on the wall.");
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, " + number + " bottles of beer on the wall.");

};

bottleSong(5);
