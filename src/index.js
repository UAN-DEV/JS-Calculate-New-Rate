"use strict";

/**
 * Calculate new rate winner of competition.
 *
 * @param {number} winnerRate - Rate of winner (must be >= 0).
 * @param {number} loserRate - Rate of loser (must be >= 0).
 * @returns {number} New rate of winner, rounded to 1 decimal place.
 */
function calculateRate(winnerRate, loserRate) {
  if (
    winnerRate < 0 ||
    loserRate < 0 ||
    !Number.isFinite(winnerRate) ||
    !Number.isFinite(loserRate)
  )
    throw new TypeError("Entered values are incorrect"); // При неправильном вводе появится сообщение об ошибке
  let newRate = winnerRate; 
  if (winnerRate - loserRate < 20) newRate = winnerRate + 1; 
  if (winnerRate - loserRate <= 2) newRate = winnerRate + 2; 
  if (winnerRate < loserRate) 
  newRate = winnerRate + (loserRate - winnerRate + 5) / 3; 
  if (winnerRate === 0) newRate = loserRate; 
  return Math.round(newRate * 10) / 10;
}


//1. При победе над более слабым или равным по рейтингу игроком:

//       1.1 Разница рейтингов вашего и соперника >= 0 и <= 2 единиц -- получаете +2 к рейтингу.
console.log(calculateRate(40, 40));
console.log(calculateRate(40, 38));
console.log(calculateRate(40, 37));

//       1.2 Разница рейтингов вашего и соперника  > 2 и < 20 единиц -- получаете +1 к рейтингу.

console.log(calculateRate(40, 37));
console.log(calculateRate(40, 21));
console.log(calculateRate(40, 20));

//        1.3 Разница рейтингов вашего и соперника >= 20 единиц -- получаете 0 к рейтингу;
console.log(calculateRate(40, 15));
console.log(calculateRate(40, 10));

//2. При победе над более сильным по рейтингу игроком добавка к рейтингу рассчитывается по формуле: (Р.соперника - Р.ваш + 5)/3;
console.log(calculateRate(40, 60));

//3. Если рейтинг победителя равен 0, то рейтинг будет равен рейтингу проигравшего.
console.log(calculateRate(0, 50));

//4. Если рейтинг проигравшего равен 0, то рейтинг победителя не меняется.
console.log(calculateRate(40, 0));

// При выводе результат нужно округлить до десятых.
console.log(calculateRate(88.45564, 45));
console.log(calculateRate(4.45564, 0));
