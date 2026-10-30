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
    return NaN;
  let newRate = winnerRate;
  if (winnerRate === 0) newRate = loserRate;
  if (loserRate === 0) newRate = winnerRate;
  if (winnerRate < loserRate)
    newRate = winnerRate + (loserRate - winnerRate + 5) / 3;
  if (winnerRate - loserRate <= 2) newRate = winnerRate + 2;
  if (winnerRate - loserRate < 20) newRate = winnerRate + 1;
  return Math.round(newRate * 10) / 10;
}

console.log("calculateRate(-14,45) :>> ", calculateRate(-14, 45));
console.log("calculateRate(14,-45) :>> ", calculateRate(14, -45));
console.log(`calculateRate("14", "45") :>> `, calculateRate("14", "45"));
console.log(`calculateRate(14, "45") :>> `, calculateRate(14, "45"));
console.log(`calculateRate(4,45) :>> `, calculateRate(4, 45));
console.log(`calculateRate(0,0) :>> `, calculateRate(0, 0));
console.log(`calculateRate(4,0) :>> `, calculateRate(4, 0));
console.log(`calculateRate(4,1) :>> `, calculateRate(4, 1));
console.log(`calculateRate(4.45564, 4) :>> `, calculateRate(4.45564, 4));
console.log(`calculateRate(4.45564, 0) :>> `, calculateRate(4.45564, 0));
