"use strict";

/**
 * Calculate new rate winner of competition.
 *
 * @param {number} winnerRate - Rate of winner (must be >= 0).
 * @param {number} loserRate - Rate of loser (must be >= 0).
 * @returns {number} New rate of winner, rounded to 1 decimal place.
 */
function calculateRate(winnerRate, loserRate) {
  const round = (num, precision = 10) =>
    Math.round(num * precision) / precision;
  const diferrent = winnerRate - loserRate
  
  switch (true) {
    case winnerRate < 0:
    case loserRate < 0:
    case !Number.isFinite(winnerRate):
    case !Number.isFinite(loserRate): {
      console.log("Entered values are incorrect");
      return NaN;
    }                                                         
    case loserRate === 0: return round(winnerRate); //4. Если рейтинг проигравшего равен 0, то рейтинг победителя не меняется.
    case winnerRate === 0: return round(loserRate); //3. Если рейтинг победителя равен 0, то рейтинг будет равен рейтингу проигравшего.
    case diferrent >= 0 && diferrent <= 2: return round(winnerRate + 2); // 1.1 Разница >= 0 и <= 2 единиц -- получаете +2 к рейтингу.
    case diferrent > 2 && diferrent < 20: return round(winnerRate + 1); // 1.2 Разница  > 2 и < 20 единиц -- получаете +1 к рейтингу.
    case diferrent >= 20: return round(winnerRate);    // 1.3 Разница рейтингов вашего и соперника >= 20 единиц -- получаете 0 к рейтингу;
    default: return round(winnerRate + (5 - diferrent) / 3); // 2. При победе над более сильным по рейтингу игроком
  }
}

//1. При победе над более слабым или равным по рейтингу игроком:

// 1.1 Разница рейтингов вашего и соперника >= 0 и <= 2 единиц -- получаете +2 к рейтингу.
console.log(calculateRate(41.33, 40));
console.log(calculateRate(40.6, 39));

//       1.2 Разница рейтингов вашего и соперника  > 2 и < 20 единиц -- получаете +1 к рейтингу.
console.log(calculateRate(40.12, 21));

//        1.3 Разница рейтингов вашего и соперника >= 20 единиц -- получаете 0 к рейтингу;
console.log(calculateRate(40, 15));

//2. При победе над более сильным по рейтингу игроком добавка к рейтингу рассчитывается по формуле: (Р.соперника - Р.ваш + 5)/3;
console.log(calculateRate(40, 60));

//3. Если рейтинг победителя равен 0, то рейтинг будет равен рейтингу проигравшего.
console.log(calculateRate(0, 50));

//4. Если рейтинг проигравшего равен 0, то рейтинг победителя не меняется.
console.log(calculateRate(40, 0));

// При выводе результат нужно округлить до десятых.
console.log(calculateRate(88.45564, 45));
// Неправильный ввод
console.log(calculateRate(4.45564, -4));
console.log(calculateRate(4.45564, '555'));
console.log(calculateRate(4.45564, ));
console.log(calculateRate(4.45564, true));
