# White belt

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

Whenever you change the .env file etheir by adding or removing a varialbe please run:
```batch
yarn gen-env
```
or
```batch
npm run gen-env
```
That will update your .env.example and src/types/env.d.ts files.

This project runs tests using **mocha** test framework, and **chai** assertion library

***Any suggestions are welcome, or you can add a PR (Pull request)***
