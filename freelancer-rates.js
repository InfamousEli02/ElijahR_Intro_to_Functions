// ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * param {number} ratePerHour
 * returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * param {number} budget: the total budget
 * param {number} ratePerHour: the rate per hour
 * returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * param {number} ratePerHour
 * param {number} numDays: number of days the project spans
 * param {number} discount: for example 20% written as 0.2
 * returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // Calculate the day rate by multiplying the hourly rate by 8 (standard working hours in a day)
  const rate = dayRate(ratePerHour);
 // Determine how many full months (22 billable days each) the project spans
  const month = Math.floor(numDays / 22);
 // Calculate the remaining days after accounting for full months
  const remain = numDays % 22;
 // Compute the undiscounted monthly rate (day rate multiplied by 22 working days)
  const undisMonth = rate * 22;
 // Apply the discount to the monthly rate (e.g., 0.42 discount means charging 58% of the original rate)
  const dis = undisMonth * (1-discount);
// Calculate the total cost for full months at the discounted rate
  const cost = month * dis;
// Calculate the cost for remaining days at the standard day rate (no discount)
  const remainCost = remain * rate;
// Sum the costs for full months and remaining days

// Round up to the nearest whole number to ensure the freelancer doesn't undercharge
  return Math.ceil(cost + remainCost);
}
