# White belt

[![Maintainability](https://api.codeclimate.com/v1/badges/d33e5904d62a3eba1f5c/maintainability)](https://codeclimate.com/github/BilalDja/white-belt/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d33e5904d62a3eba1f5c/test_coverage)](https://codeclimate.com/github/BilalDja/white-belt/test_coverage)

Express typescript boilerplate project that gives you a boost and a nice workflow.

## Usage

```batch
mkdir yourProject
cd yourProject
git clone https://github.com/BilalDja/white-belt .
yarn
```
or
```batch
npm install
```
After downloading the project dependencies, you have to add .env file that holds your environment variables. To do that through the terminal:
```batch
cp .env.example .env
```
Then edit your .env file according to your needs

Whenever you change the .env file either by adding or removing a variable please run:
```batch
yarn gen-env
```
or
```batch
npm run gen-env
```
That will update your .env.example and src/types/env.d.ts files.

## Testing

This project runs tests programmatically, so whenever you add a new test file you need to insert it in `tests/subtests.ts` file.
This project runs tests using [**mocha**][mocha] test framework, and [**chai**][chai] assertion library. To run the tests use: `yarn test` or `npm test`.

***Any suggestions are welcome, or you can add a PR (Pull request)***

[mocha]: https://mochajs.org/
[chai]: https://www.chaijs.com/