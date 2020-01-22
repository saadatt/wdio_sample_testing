const assert = require('assert');
const {expect} = require('chai');
const email = Math.random().toFixed(1)+'lyalyalya@gmail.com';
const firstName = 'John';
const lastName = 'Travolta';
const password = 'password';

describe('Register Page', () => {
before(() => {
    browser.url('https://stage.pasv.us/user/register');
});
    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        //assert.equal(actualTitle, expectedTitle);
        expect(actualTitle).equal(expectedTitle);
    });
    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1text = 'User Register';
        //assert.equal(actualH1text, expectedH1text);
        expect(actualH1text).equal(expectedH1text);
    });
    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    });
    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    });
    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        console.log(actual);
        const expected = 'Submit';
        expect(actual).equal(expected);
    });
    it('should fill First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName)
    });
    it('should fill Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName)
    });
    it('should fill up phone number field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('14052692405')
    });
    it('should fill up e-mail field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(4000);
    });
    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });
    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('rodilas rosla vyrosla');
    });
    it('should fill up goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep code');
    });
    //$(selector).selectByAttribute(attribute, value)
    it('should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
    });
    it('should click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(5000);
    });
});












