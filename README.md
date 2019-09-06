# cuckuteer



based on a node alpine, uses puppeteer and cucumber to test a very simple koa api

```docker-compose up --build -d```
after that. you probably have a screenshot in app/example.png on your host!
https://github.com/GoogleChrome/puppeteer


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

used a bit of https://medium.com/@anephenix/end-to-end-testing-single-page-apps-and-node-js-apis-with-cucumber-js-and-puppeteer-ad5a519ace0 