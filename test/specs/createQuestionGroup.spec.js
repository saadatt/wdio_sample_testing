const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
    pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors, pageCreateFlashGroup,
    pageCreateFlashGroupSelectors, pageCreateCourse, pageCreateCourseSelectors,
    pageQuiz, pageQuizSelectors} = require('./register_data');

const {expect} = require('chai');

describe('CREATE Question Group', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue('0.01lalala@gmail.com');
        $(pageLoginSelectors.passwordInput).setValue('ppaasswwoorrdd');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(5000);
    });

    it('should click QUIZ navigation link', () => {
        const element1 = $(pageQuizSelectors.quizLink);
        element1.click();
        browser.pause(1000);
        browser.$('//button[@class=\'btn btn-primary\']').click();
        browser.pause(5000);
    });

    it('should have correct heading', () => {
        const actual = $(pageQuizSelectors.h1).getText();
        const expected = pageQuiz.h1;
        expect(actual).equal(expected);
    });

    it('should fill out the Question group name field', () => {
        const element = $(pageQuizSelectors.groupName);
        element.setValue(pageQuiz.groupName);
    });

    it('should fill out the Question Group Description field', () => {
        const element = $('form input[name="description"]');
        element.setValue(pageQuiz.groupDescription);
        browser.pause(3000);
    });

    it('should fill out the Number of Acceptable Mistakes field', () => {
        const element = $(pageQuizSelectors.acceptableMistakes);
        element.setValue(pageQuiz.acceptableMistakes);
        browser.pause(3000);
    });

    it('should click Save Button', () => {
        const element  = $(pageQuizSelectors.saveButton);
        element.click();
    });
});