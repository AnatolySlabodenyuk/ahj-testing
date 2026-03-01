/**
 * Validates a credit card number using the Luhn algorithm.
 * @param {string} cardNumber - digits only, no spaces
 * @returns {boolean}
 */
export function luhnCheck(cardNumber) {
  const digits = cardNumber.replace(/\D/g, "");
  if (digits.length < 13) return false;

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * Detects the payment system of a card number.
 * @param {string} cardNumber - digits only, no spaces
 * @returns {string|null} - 'visa'|'mastercard'|'amex'|'mir'|'discover'|null
 */
export function detectCardType(cardNumber) {
  const digits = cardNumber.replace(/\D/g, "");

  if (/^4\d{12}(\d{3})?$/.test(digits)) {
    return "visa";
  }

  if (
    /^(5[1-5]\d{14}|2(2[2-9][1-9]|[3-6]\d{2}|7[01]\d|720)\d{12})$/.test(digits)
  ) {
    return "mastercard";
  }

  if (/^3[47]\d{13}$/.test(digits)) {
    return "amex";
  }

  if (/^220[0-4]\d{12}$/.test(digits)) {
    return "mir";
  }

  if (
    /^(6011\d{12}|65\d{14}|64[4-9]\d{13}|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))\d{10})$/.test(
      digits,
    )
  ) {
    return "discover";
  }

  return null;
}
