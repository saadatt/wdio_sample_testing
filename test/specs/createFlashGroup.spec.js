const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
    pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors, pageCreateFlashGroup,
    pageCreateFlashGroupSelectors } = require('./register_data');

const {expect} = require('chai');

describe('CREATE NEW FLASH GROUP', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue('0.01lalala@gmail.com');
        $(pageLoginSelectors.passwordInput).setValue('ppaasswwoorrdd');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(5000);
    });

    it('should click CARDS navigation link', () => {
        const element1 = $(pageCreateDailyReportSelectors.cardsLink);
        element1.click();
        browser.pause(5000);
       // driver.findElement(By.xpath("//button[1]")).click();
        //const locator = "button[qa*='flash-create-new-group']";
        //driver.findElement(By.cssSelector(locator)).click();
        browser.$('//button[@class=\'btn btn-secondary\']').click();
        browser.pause(5000);
    });

    it('should have correct heading', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageCreateFlashGroup.h1;
        expect(actual).equal(expected);
    });

    it('should fill out the Flash Group name field', () => {
        const element = $(pageCreateFlashGroupSelectors.groupName);
        element.setValue(pageCreateFlashGroup.flashGroupName);
    });

    it('should fill out the Flash Group description field', () => {
        const element = $('form input[name="description"]');
        element.setValue(pageCreateFlashGroup.flashGroupDescription);
        browser.pause(3000);
    });

    it('should have the correct Create button text and click it', () => {
        const actual = browser.$('//button[@class=\'btn btn-primary\']').getText();
        const expected = pageCreateFlashGroup.buttonText;
        expect(actual).equal(expected);
    });

    it('should show the correct notification', () => {
        const actual = browser.$(pageRegisterSelectors.notificationMessage).getText();
        const expected = pageCreateFlashGroup.notificationMessage;
        expect(actual).equal(expected);
        browser.pause(3000);
    });
});
