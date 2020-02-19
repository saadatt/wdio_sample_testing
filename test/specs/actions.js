const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin,
    pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors } = require('./register_data');

function loginAsAdmin () {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('0.40lalala@gmail.com');
    $(pageLoginSelectors.passwordInput).setValue('ppaasswwoorrdd');
    $(pageLoginSelectors.submitButton).click();
    browser.pause(5000);
};

function logout () {
    browser.$('//a[@class="dropdown-toggle nav-link"]').click();
    browser.$('//button[contains(text(), "Logout")]').click();
    browser.pause(5000);
};

module.exports = {loginAsAdmin, logout};