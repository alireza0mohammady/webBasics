// let number1 = 10;
// let number2 = 22;
//
// function maximum(num1, num2) {
//   if (num1 < num2) return num2;
//   if (num1 > num2) return num1;
//   return "equal";
// }
// console.log(maximum(number1, number2));
// console.log(maximum(22, 22));
// console.log(maximum(54, 99));
// console.log(maximum(0, 0));
// function isLandscape(width, hight) {
//   return width > hight;
// }
// console.log(isLandscape(200, 600));
// function speedLimitControl(speed) {
//   let speedlimit = 70;
//   let kmPerPoint = 5;
//   let speedLimitOverflow = speed > speedlimit ? speed - speedlimit : 0;
//   let minusPoints = Math.floor(speedLimitOverflow / kmPerPoint);
//   return minusPoints > 12 ? "suspend" : minusPoints;
// }
// console.log(speedLimitControl(220));
//
// function oddEvenIdentifier(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "even");
//     else console.log(i, "odd");
//   }
// }
// oddEvenIdentifier(11);
// let movie = {
//   name: "ttt",
//   release: 2020,
//   director: "bbb",
//   sell: 150000000,
// };
// function getObjectStrings(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }
// getObjectStrings(movie);
// let grades = [80, 90, 50, 70];
// function grade(array) {
//   let sum = 0;
//   for (const grade of array) {
//     sum = sum + grade;
//   }
//   let average = sum / array.length;
//   if (average >= 90) return "A";
//   if (average >= 80) return "B";
//   if (average >= 70) return "C";
//   if (average >= 60) return "D";
//   return "F";
// }
// console.log(grade(grades));
// function star(number) {
//   let printInConsole = "";
//   for (let i = 1; i <= number; i++) {
//     printInConsole = printInConsole + "*";
//     console.log(printInConsole);
//   }
// }
// star(10);
// function showPrimes(limit) {
//   for (let i = 2; i <= limit; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }
//
// function checkPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }
//
// showPrimes(20);
// const address = {
//   street: "navab",
//   city: "mashad",
//   zipCode: "hello mashad",
//   showAddress() {
//     for (const key in this) {
//       console.log(key, this[key]);
//     }
//   },
// };
// function address(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }
//
// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }
//
// const address1 = new Address("A", "B", "C");
//
// const address2 = new Address("A", "B", "C");
//
// function isEqual(address1, address2) {
//   const address1Length = Object.keys(address1).length;
//   const address2Length = Object.keys(address2).length;
//
//   if (address1Length !== address2Length) return false;
//
//   for (const key in address1) {
//     if (!(key in address2)) return false;
//     if (address1[key] !== address2[key]) return false;
//   }
//
//   return true;
// }
//
// console.log(isEqual(address1, address2));
//
// function isSame(address1, address2) {
//   if (!isEqual(address1, address2)) return false;
//   address1.isSameTesting = 1;
//   if (!("isSameTesting" in address2) || address2.isSameTesting === 1) {
//     delete address1.isSameTesting;
//     return false;
//   }
//   delete address1.isSameTesting;
//   return true;
// }
//
// console.log(isSame(address2, address1));

const firstBlogpost = {
  title: "blog title",
  body: `blog body`,
  author: "blog author",
  views: 67,
  comments: [
    { author: "author1", body: `comment body` },
    { author: "author2", body: `comment body` },
  ],
  isLive: true,
};
