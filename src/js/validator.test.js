import { luhnCheck, detectCardType } from "./validator";

describe("luhnCheck", () => {
  test.each([
    { card: "4111111111111111", expected: true },
    { card: "5500005555555559", expected: true },
    { card: "371449635398431", expected: true },
    { card: "6011111111111117", expected: true },
    { card: "2200000000000004", expected: true },
    { card: "4111111111111112", expected: false },
    { card: "1234567890123456", expected: false },
    { card: "000", expected: false },
    { card: "4111 1111 1111 1111", expected: true },
  ])("luhnCheck($card) → $expected", ({ card, expected }) => {
    expect(luhnCheck(card)).toBe(expected);
  });
});

describe("detectCardType", () => {
  test.each([
    { card: "4111111111111111", expected: "visa" },
    { card: "4012888888881881", expected: "visa" },
    { card: "5500005555555559", expected: "mastercard" },
    { card: "5105105105105100", expected: "mastercard" },
    { card: "2221000000000009", expected: "mastercard" },
    { card: "371449635398431", expected: "amex" },
    { card: "378282246310005", expected: "amex" },
    { card: "2200000000000004", expected: "mir" },
    { card: "2204000000000000", expected: "mir" },
    { card: "6011111111111117", expected: "discover" },
    { card: "6500000000000002", expected: "discover" },
    { card: "9999999999999999", expected: null },
    { card: "1234567890123456", expected: null },
  ])("detectCardType($card) → $expected", ({ card, expected }) => {
    expect(detectCardType(card)).toBe(expected);
  });
});
