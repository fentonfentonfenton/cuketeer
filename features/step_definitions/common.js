// Dependencies
const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer-core');

// Defines whether puppeteer runs Chrome in headless mode.
let headless = true;
let slowMo = 0;

Given('I visit {string}', function (string) {
    (async () => {
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser',
            args: ['--disable-dev-shm-usage']
        });
        const browserVersion = await browser.version();
        const page = await browser.newPage();
        await page.goto(string);
        await page.waitForSelector('pre');
        const stringIsIncluded = await page.evaluate(() => {
            const text = ("Hello World");
            const selector = 'pre';
            return document.querySelector(selector).innerText.includes(text);
          });
      
          console.log(stringIsIncluded);
          console.log(browserVersion);
        await page.screenshot({path: 'app/example.png'});  
        await browser.close();
      })();
});
