##                                   Project 
###               Unit testing with a use of WebdriverIO framework 

#### Introduction & Package Installation Guide
 
   You’ll need Node.js installed (at least v8.11.2 or higher). Install WebdriverIO.
   
    npm i --save-dev @wdio/cli
   
   Generate Configuration File
   
    ./node_modules/.bin/wdio config -y
    
   Create Spec Files
    Now it's time to create your test file. You’re going to store all of your test files in a new folder. 
    
    ./test/specs/basic.js
   Open this file, and write the following code in it:
    
    const assert = require('assert')
    
    describe('webdriver.io page', () => {
        it('should have the right title', () => {
            browser.url('https://webdriver.io')
            const title = browser.getTitle()
            assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
        })
    })

##### How the test actually works

   The following two constant variables have to be declared:

    const assert = require('assert');
       
    
   ##### describe()
   is a function which holds the collection of tests. It has the following generic construction:
   describe( 'name of the test', () => {
    it ( 'name of expected result', () => {
    expect (function(input)).to.equal(output);
    });
    
   
   #####  ... expect().to.equal()  
   is a generic construction that essentially validates the output or task of the function.
   
![](img/pic_webdriverio.jpg)

##### Attachment

* [Tests of Register page](test/register.spec.js)