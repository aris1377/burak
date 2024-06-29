//O-TASK:

//Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
 //array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
//MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr: any[]): number {
    return arr.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        }
        return sum;
    }, 0);
}
console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 


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
