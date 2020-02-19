const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
    pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors } = require('./register_data');
const { loginAsAdmin, logout } = require('./actions');
const URL_REPORT = 'https://stage.pasv.us/diary/create';

const {expect} = require('chai');

describe('CREATE DAILY REPORT', () => {
    before('Login as admin', () => {
        loginAsAdmin();
        browser.pause(4000)
    });

    it('should open Create Day Report page', () => {
        browser.url(URL_REPORT);
        browser.pause(4000);
    });

    after('Logout', () => {
        logout();
        browser.pause(8000)
    });

});



