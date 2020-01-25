const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;


const user = {
    firstName : 'John',
    lastName: 'Travolta',
    password : 'ppaasswwoorrdd',
    email: Math.random().toFixed(2) + 'lalala@gmail.com',
    phone: '14052692405',
    about: 'I was born, grew up, learned a lot',
    goals: 'eat sleep code',
    englishLevel: 'Proficient',
};

const pageRegister = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit',
    notificationMessage: 'User created successfully. Please check your email and verify it',
    authorizationMessage: 'Auth success',
    emailExistsMessage: 'User with this e-mail exists',
};

const pageRegisterSelectors = {
    h1: 'h1',
    description: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]',
    notificationMessage: '//h4[@class="notification-title"]'
};

const pageLogin = {
    title: 'Progress Monitor',
    h1: 'User Login',
    buttonText: 'Login',
};

const pageLoginSelectors = {
    h1: 'h1',
    submitButton: 'form button[type="submit"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
};

const pageConfirmation = {
    h1: 'You are a new user',
};

const pageConfirmationSelectors = {
    h1: 'h1',
};


const pageCreateDailyReport = {
    h1: 'Create day report',
    summary: 'worked hard, did that and that ',
    hours: '8',
    morale: '10 – I am pleased with everything!',
    saveButtonText: 'Save',
    diaryLink: 'Diary'
};

const pageCreateDailyReportSelectors = {
    h1: 'h1',
    mark1: 'form input[label="Watched lectures"]',
    mark2: 'form input[label="I understood everything"]',
    mark3: 'form input[label="Helped classmates"]',
    summary: 'form textarea[name="description"]',
    hours: 'form input[name="hours"]',
    morale: 'form select[name="morale"]',
    saveButton: 'form button[type="submit"]',
    diaryLink: 'nav a[qa="diary-link"]'
};

const pageDiary = {
    h1: 'Daily reports',
};

const pageDiarySelectors = {
    h1: 'h1',
};


module.exports = {HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors,
    pageLogin, pageLoginSelectors, pageConfirmation, pageConfirmationSelectors, pageCreateDailyReport,
    pageCreateDailyReportSelectors, pageDiary, pageDiarySelectors};

