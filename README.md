# cuckuteer

[![Known Vulnerabilities](https://snyk.io//test/github/fentonfentonfenton/cuckuteer/badge.svg?targetFile=package.json)](https://snyk.io//test/github/fentonfentonfenton/cuckuteer?targetFile=package.json)


based on a node alpine, uses puppeteer and cucumber to test a very simple koa api

`git clone` this
then

```docker-compose up --build -d```
after that. you probably now have a screenshot in app/example.png on your host! if not, you just lost the game.


this is a skeleton MVP and needs some work. halp. 

currently runs one tiny scenario
```
Feature: Let's do this
  In order to be cool
  As a cuckuteer
  I want a browser to test my application
  
  Scenario: Successfully koa
    Given I visit "http://koa:8080"
```

uses:

https://github.com/GoogleChrome/puppeteer
`cucumber-js`
`node-js`

`docker-koa` `koa` https://hub.docker.com/r/coogleyao/docker-koa/
used a bit of https://medium.com/@anephenix/end-to-end-testing-single-page-apps-and-node-js-apis-with-cucumber-js-and-puppeteer-ad5a519ace0 



*to-do* this only works in docker atm, as you need to comment some lines out to run it locally with node, and the docker-koa service running. and use localhost:8080 in the feature file.




![](rage_pickle.gif)
