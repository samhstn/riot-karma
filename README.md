[![Build Status](https://travis-ci.org/shouston3/riot-karma.svg?branch=master)](https://travis-ci.org/shouston3/riot-karma)
# Riot Components tested using Karma

## What

A demonstration of using karma-riot

## Why

To demonstrate how to test Riot applications using a fast testing framework

Other testing options are:

- In browser testing using Jasmine or Qunit
- Running tests in real browsers using Nightwatch or Nightmare

## How

#### Clone the repository
```
git clone https://github.com/shouston3/riot-karma.git && cd riot-karma
```

#### Install the dependencies:
```
npm install
```

#### Run the tests
```
npm test
```

## Pain points

I would recommend not using karma-tap

Both phantomjs and chrome work well locally

Phantomjs is remarkably easy to host on travis and ensures browser compatibility, so I decided on using that

I had no problems with karma-riot, I would recommend reading the source code as it's quite short and easy to follow along and it gives you an idea of the karma interface to insert a preprocessor and plugin.

