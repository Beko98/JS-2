// 1st
let getEvenNumbers = () => {
  const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 11, 15, 20, 24, 25, 26];

  for (num of arr) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
};

getEvenNumbers();

// 2nd
let pattern = "";
for (let i = 1; i < 10; i++) {
  pattern += i + " ";
  console.log(pattern);
}

// 3rd
let value = 245;
let sum = 0;

while (value) {
  sum = sum + (value % 10);
  value = Math.floor(value / 10);
}

console.log(sum);
