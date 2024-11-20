// Oppg. 1:

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log("Det minste nummeret i lista er:");
console.log(findMin([1, 6, 2, 8, -1]));
console.log(findMin([-140, 250, 5, 0, -10]));
console.log(findMin([100456, 2560, 303, 156]));
console.log(findMin([-5, -7, 1, -4]));
console.log(findMin([1, 2, 3]));

//Oppg. 2
function countVowels(str) {
  const vowels = "aeiouyæøåAEIOUYÆØÅ";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log("Antal vokalar:");
console.log(countVowels("Hei på deg"));
console.log(countVowels("Korleis har du det?"));
console.log(countVowels("Det er mykje snøv ute"));
console.log(countVowels("..."));
console.log(countVowels("h31 r2d2"));

//Oppg. 3
function sumRange(start, end) {}
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log("Alle numrene i ein range summert:");
console.log(sumRange(1, 5));
console.log(sumRange(45, 50));
console.log(sumRange(-9, -3));
console.log(sumRange(-2, 2));

//Oppg. 4
function countOccurences(str, char) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      sum++;
    }
  }
  return sum;
}

console.log("Kor mange gongar ein bokstav dukkar opp i ein string:");
console.log(countOccurences("Hello World!", "l"));
console.log(countOccurences("Hello World!", "æ"));
console.log(countOccurences("Ærlig talt, Ola!", "l"));
console.log(countOccurences("Ærlig talt, Ola!", "Æ"));
console.log(
  countOccurences("My mama always said life was like a box of chocolates.", "a")
);
console.log(countOccurences("You never know what you're gonna get.", "å"));

//Oppg. 5
function removeDuplicates(arr) {
  let noDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (noDuplicates.indexOf(arr[i]) === -1) {
      noDuplicates.push(arr[i]);
    }
  }

  return noDuplicates;
}
console.log("Array der duplicates er fjernet:");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(
  removeDuplicates(["Harald", "Håkon", "Harald", "Bjarne", "Grethe"])
);
console.log(
  removeDuplicates([
    "Raud",
    "Oransj",
    "Gul",
    "Gul",
    "Grønn",
    "Raud",
    "Blå",
    "Lilla",
    "Gul",
  ])
);

console.log(
  removeDuplicates([
    "Eg",
    "elskar",
    "å",
    "lese",
    "bøker",
    ",",
    "bøker",
    "som",
    "åpnar",
    "nye",
    "verder",
    "og",
    "bøker",
    "som",
    "gjev",
    "meg",
    "glede",
    ".",
  ])
);
