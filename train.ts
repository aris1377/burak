// 39th Lesson TASK H2

// String argument pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib
// yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"
// Yuqoridagi misolda, berilayotgan parametr tarkibida ham harf ham son mavjud.
// Natija sifatida text tarkibidagi sonlarni aniqlab ularni string ko'rinishida qaytarmoqdamiz
function getDigits(inputString: string): string {
  let digits = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= "0" && inputString[i] <= "9") {
      digits += inputString[i];
    }
  }
  return digits;
}
let result = getDigits("m14i1t");
console.log(result);

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
