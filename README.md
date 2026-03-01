![CI](https://github.com/AnatolySlabodenyuk/ahj-testing/actions/workflows/web.yml/badge.svg)

# Credit Card Validator

Homework project — Testing Organization (AHJ-50).

Live demo: https://anatolyslabodenyuk.github.io/ahj-testing/

## Description

Interactive widget for credit card number input with:
- **Luhn algorithm** validation
- **Payment system detection** (Visa, Mastercard, Amex, Mir, Discover)
- Real-time visual feedback

## Stack

- Webpack 5, Babel
- ESLint + Prettier
- Jest (unit tests)
- GitHub Actions CI/CD → GitHub Pages

## Scripts

```bash
yarn start       # dev server
yarn build       # production build
yarn lint        # lint & fix
yarn test        # run tests
```
