// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan
// raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

function findDisappearedNumbers(arr: number[]): number[] {
    const maxNum = Math.max(...arr);
    const missingNumbers: number[] = [];

    for (let i = 1; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

// Misol uchun:
console.log(findDisappearedNumbers([1, 3, 4, 7])); // [2, 5, 6]


// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'


// function capitalizeWords(str: string): string {
//     // 1. Barcha harflarni kichik harflarga o'tkazamiz
//     const lowerCased = str.toLowerCase();
    
//     // 2. So'zlar orasidagi bo'shliqlarni "_" bilan almashtiramiz
//     const snakeCased = lowerCased.replace(/\s+/g, '_');

//     return snakeCased;
// }

// // Misol
// console.log(capitalizeWords('name should be a string')); // 'name_should_be_a_string'

// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. 
// String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 
// 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String

// function capitalizeWords(input: string): string {
//   function capitalizeIfNeeded(word: string): string {
//     if (word.length > 2) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word;
//     }
//   }

//   const words = input.split(" ");

//   const capitalizedWords = words.map((word) => capitalizeIfNeeded(word));

//   return capitalizedWords.join(" ");
// }

// const inputString = "name should be a string";
// const result = capitalizeWords(inputString);
// console.log(result);

// TASK ZE

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.

// function removeDuplicate(s: string): string {
//   let result = "";
//   for (let char of s) {
//     if (result.indexOf(char) === -1) {
//       result += char;
//     }
//   }
//   return result;
// }

// // Misol uchun
// console.log(removeDuplicate("stringg")); // 'string'

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// function changeNumberInArray(
//   firstPrime: number,
//   arr: number[],
//   secondPrime: number
// ): number[] {
//   let index = arr.indexOf(firstPrime);

//   if (index !== -1) {
//     arr[index] = secondPrime;
//   }

//   return arr;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(10)); // 50

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Masalan, randomBetween(30, 50) random raqamni qaytaradi
// console.log(randomBetween(30, 50));

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(numbers: number[]): number {
//   return numbers
//     .filter((num) => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvens([1, 2, 3])); // 2
// console.log(sumEvens([1, 2, 3, 2])); // 4

// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);

//   let intersection = [...set1].filter((value) => set2.has(value));

//   return intersection;
// }
// //
// console.log(findIntersection([1, 2, 3], [3, 2, 0])); // Output: [2, 3]

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   function recurse(obj: any) {
//     for (let k in obj) {
//       if (k === key) {
//         count++;
//       }
//       if (typeof obj[k] === "object" && obj[k] !== null) {
//         recurse(obj[k]);
//       }
//     }
//   }

//   recurse(obj);
//   return count;
// }

// const example = { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } };
// const result = countOccurrences(example, "model");
// console.log(result);

// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.

// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

// function chunkArray(arr: any[], chunkSize: number): any[][] {
//     let result: any[][] = [];

//     for (let i = 0; i < arr.length; i += chunkSize) {
//         result.push(arr.slice(i, i + chunkSize));
//     }

//     return result;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;

// const chunkedArray = chunkArray(array, chunkSize);
// console.log(chunkedArray);

// V-TASK:

// Shunday function yozing, uni string parametri bolsin
// va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(str: string): Record<string, number> {
//   const charCount: Record<string, number> = {};

//   for (const char of str) {
//     if (char in charCount) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount;
// }

// console.log(countChars("hello"));

// 2024-07-13
// MIT 14
// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// function sumOdds(num: number): number {
//   let count = -1;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// //
// console.log(sumOdds(9)); // 4
// console.log(sumOdds(11)); // 5

// Shunday function yozing,
//u sonlardan tashkil topgan 2 ta array qabul qilsin
// va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const mergedArray: number[] = [];
//   let i = 0,
//     j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// const array1 = [0, 3, 4, 31];
// const array2 = [4, 6, 30];
// const mergedArray = mergeSortedArrays(array1, array2);
// console.log(mergedArray);

// 2024-07-08
// MIT 14
// TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan

// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const totalSum = (n * (n + 1)) / 2;
//     const arraySum = nums.reduce((acc, num) => acc + num, 0);
//     return totalSum - arraySum;
// }

// // Misol
// console.log(missingNumber([3, 0, 1]));

// Shunday function yozing,
// u string parametrga ega bolsin.String "1+2" holatda pass qilinganda
// string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(num: string): number{
//   const numbers = num.split("+").map(Number);
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return sum;
// }
// const result = calculate("1+3");
// console.log(result);

// 2024-07-05
// MIT 14 TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

// function hasProperty(obj: object, prop: string): boolean {
//   return obj.hasOwnProperty(prop);
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// 2024-07-02
// MIT 14
// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// const obj = { a: 10, b: 20 };
// const result = objectToArray(obj);
// console.log(result);

//O-TASK:

//Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
//array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
//MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//     return arr.reduce((sum, item) => {
//         if (typeof item === 'number') {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));

// 2024-06 - 27
// MIT 14
// TASK N:

// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.

// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi

// function palindromeCheck(word: string): boolean {

//     const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//     const reversedWord = cleanedWord.split('').reverse().join('');
//     return cleanedWord === reversedWord;
// }

// // Examples
// console.log(palindromeCheck("dad")); // true
// console.log(palindromeCheck("son")); // false

// 2024-06-25
// MIT 14
// TASK M:

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, number: 2, square: 4 }, { number: 3, square: 9 }];

// interface NumberSquare {
//   number: number;
//   square: number;
// }

// function getSquareNumbers(numbers: number[]): NumberSquare[] {
//   return numbers.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// // Example usage
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);
// Output: [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }]

// // L-TASK:

// // Shunday function yozing,
// // u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma - ketligini buzmasdan stringni qaytarsin.
// // MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(words: string): string {
//   const new_word = words.split(" ");

//   const reversedWords = new_word.map((words) => {
//     return words.split("").reverse().join("");
//   });

//   return reversedWords.join(" ");
// }
// const result = reverseSentence("we like coding!");
// console.log(result);

// 2024-06-21
// MIT 14
// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

// function countVowels(str: string): number {
//   const unliHarflar = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (unliHarflar.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("string"));

// 2024-06-18
// MIT 14
// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(str: string): string {
//   const words = str.split(" ");

//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("I came from Uzbekistan!"));

// MIT 14
// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number | null {
//   const countMap: Map<number, number> = new Map();

//   for (const num of arr) {
//     if (countMap.has(num)) {
//       countMap.set(num, countMap.get(num)! + 1);
//     } else {
//       countMap.set(num, 1);
//     }
//   }

//   let majority: number | null = null;
//   let maxCount = 0;

//   countMap.forEach((count, num) => {
//     if (count > maxCount) {
//       maxCount = count;
//       majority = num;
//     }
//   });

//   return majority;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// 39th Lesson TASK H2

// String argument pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib
// yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"
// Yuqoridagi misolda, berilayotgan parametr tarkibida ham harf ham son mavjud.
// Natija sifatida text tarkibidagi sonlarni aniqlab ularni string ko'rinishida qaytarmoqdamiz
// function getDigits(inputString: string): string {
//   let digits = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] >= "0" && inputString[i] <= "9") {
//       digits += inputString[i];
//     }
//   }
//   return digits;
// }
// let result = getDigits("m14i1t");
// console.log(result);

// H-TASK:
// shunday function tuzing, u integerlardan iborat, arrayni argument sifatida qabul qilib,
// faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(numbers: number[]): string {
//   const positiveStrings = numbers
//     .filter((num) => num > 0)
//     .map((num) => num.toString());

//   return positiveStrings.join("");
// }

// const result = getPositive([1, -4, 2]);
// console.log(result);

// MIT 14 TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning taribidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// const getHighestIndex = (numbers: number[]): number => {
//   if (numbers.length === 0) {
//     throw new Error("Error");
//   }

//   let maxIndex = 0;
//   let maxValue = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxValue) {
//       maxValue = numbers[i];
//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// };

// const numbers = [5, 21, 12, 21, 8];
// console.log(getHighestIndex(numbers));

/* ProjectStandards:
- Logging standards (morgan orqali log qilyapmiz)
- Naming standards 
    camelCase => funtion, variable, method   goHome
    PascalCase => class                      MemberService
    snake_case => css                        button_style
    kebab-case => folderlarga
-Error handling standards - bu loyihamizda sodir bolayoygan errorlani handle qilish mehanizmi hisoblanadi
*/

/**
 Eng kop ishlatiladiga Api:
  1.Traditional Api - Burak
  2.Rest Api        - Burak
  3.GraphQl Api
 */

/**
 Traditional FD -> SSR -> EJS
 Modern FD      -> SPA -> REACT (LIBERY)
 */

/**validation
 frontend 
 backend
 database
 */
