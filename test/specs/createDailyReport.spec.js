const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
        pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
        pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors } = require('./register_data');

const URL_REPORT = 'https://stage.pasv.us/diary/create';

const {expect} = require('chai');

describe('CREATE DAILY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue('0.01lalala@gmail.com');
        $(pageLoginSelectors.passwordInput).setValue('ppaasswwoorrdd');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(5000);
    });

    it('should click Diary navigation link', () => {
        const element = $(pageCreateDailyReportSelectors.diaryLink);
        element.click();
        browser.url(URL_REPORT);
        browser.pause(8000);
     });

    it('should have the correct heading', () => {
        const actual = $(pageCreateDailyReportSelectors.h1).getText();
        const expected = pageCreateDailyReport.h1;
        expect(actual).equal(expected);
        browser.pause(3000);
    });

    it('should select Daily Report marks', () => {
        const element1 = $(pageCreateDailyReportSelectors.mark2);
        const element2 = $(pageCreateDailyReportSelectors.mark1);
        const element3 = $(pageCreateDailyReportSelectors.mark3);
        element1.click();
        element2.click();
        element3.click();
        browser.pause(3000);
    });

    it('should select What Your Morale Was dropdown', () => {
        const element = $(pageCreateDailyReportSelectors.morale);
        element.selectByVisibleText(pageCreateDailyReport.morale);
        browser.pause(3000);
    });

    it('should fill out How Was Your Day field', () => {
        const element = $(pageCreateDailyReportSelectors.summary);
        element.setValue(pageCreateDailyReport.summary);
        browser.pause(3000);
    });

    it('should fill out How Many Hours Studied field', () => {
        const element = $(pageCreateDailyReportSelectors.hours);
        element.setValue(pageCreateDailyReport.hours);
        browser.pause(3000);
    });

    it('should select Daily Report mark1', () => {
        const element = $(pageCreateDailyReportSelectors.mark1);
        element.click();
        browser.pause(3000);
    });

    it('should have the correct Save button text', () => {
        const actual = $(pageCreateDailyReportSelectors.saveButton).getText();
        const expected = pageCreateDailyReport.saveButtonText;
        expect(actual).equal(expected);
        browser.pause(3000);
    });

    it('should click Save button', () => {
        const element = $(pageCreateDailyReportSelectors.saveButton);
        element.click();
        browser.pause(3000);
    });
});
describe('Diary page', () => {
    it('should have the correct heading', () => {
        const actual = $(pageDiarySelectors.h1).getText();
        const expected = pageDiary.h1;
        expect(actual).equal(expected);
        browser.pause(3000);
    });
});
