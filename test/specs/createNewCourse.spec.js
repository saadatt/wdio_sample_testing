const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
    pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors, pageCreateFlashGroup,
    pageCreateFlashGroupSelectors, pageCreateCourse, pageCreateCourseSelectors } = require('./register_data');


const {expect} = require('chai');

describe('CREATE A COURSE', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue('0.01lalala@gmail.com');
        $(pageLoginSelectors.passwordInput).setValue('ppaasswwoorrdd');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(5000);
    });

    it('should click COURSES navigation link', () => {
        const element1 = $(pageCreateCourseSelectors.coursesLink);
        element1.click();
        browser.pause(1000);
        browser.$('//button[@class=\'btn btn-primary\']').click();
        browser.pause(5000);
    });

    it('should have correct heading', () => {
        const actual = $(pageCreateCourseSelectors.h1).getText();
        const expected = pageCreateCourse.h1;
        expect(actual).equal(expected);
    });

    it('should fill out the Course name field', () => {
        const element = $(pageCreateCourseSelectors.courseName);
        element.setValue(pageCreateCourse.courseName);
    });

    it('should fill out the Course description field', () => {
        const element = $('form input[name="description"]');
        element.setValue(pageCreateCourse.courseDescription);
        browser.pause(3000);
    });

    it('should select ACCESS TYPE dropdown', () => {
        const element = $(pageCreateCourseSelectors.access);
        element.selectByVisibleText(pageCreateCourse.access);
        browser.pause(3000);
    });

    it('should have the correct Create button text and click it', () => {
        const actual = browser.$('//button[@class=\'btn btn-primary\']').getText();
        const expected = pageCreateCourse.buttonText;
        expect(actual).equal(expected);
    });
});