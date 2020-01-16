const { expect } = require('chai');
//const email = Math.random()+'vik@gmail.com';
const firstName = 'Jane';
const lastName = 'Corn';
const phoneNumber = '19163908288';
const email = 'vik@gmail.com';
const password = '123000';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have the correct title', () => {
        const actual =  $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    });

    it('should have the correct description', () => {
        const actual =  $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have the correct submit button text', () => {
        const actual =  $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it('should fill First Name field', () => {
        const element =  $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(1000);
    });

    it('should fill Last Name field', () => {
        const element =  $('form input[name="lastName"]');
        element.setValue(lastName);
        browser.pause(1000);
    });

    it('should fill Cell phone number field', () => {
        const element =  $('form input[name="phone"]');
        element.setValue(phoneNumber);
        browser.pause(1000);
    });

    it('should fill Email field', () => {
        const element =  $('form input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill Password field', () => {
        const element =  $('form input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    });

    it('should fill About field', () => {
        const element =  $('form textarea[name="about"]');
        element.setValue('asasasa adadad adadadad');
        browser.pause(1000);
    });

    it('should fill My goals field', () => {
        const element =  $('form textarea[name="goals"]');
        element.setValue('asasasa adadad adadadad');
        browser.pause(1000);
    });

    it('should fill English level dropdown', () => {
        const element =  $('form select[name="englishLevel"]');
        element.selectByVisibleText('Beginner');
    });

    it('should click the button', () => {
        const element =  $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    it('should be redirected to the User Login page', () => {
        browser.url('https://stage.pasv.us/user/login');
        const actual =$('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });

    it('should fill Email field', () => {
        const element =  $('input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill Password field', () => {
        const element =  $('input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    });

    it('should click the button', () => {
        const element =  $('button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    it('should be redirected to the User"s personal page', () => {
        browser.url('https://stage.pasv.us/user/5e20bba1568e69003caf9382');
        const actual =$('h1').getText();
        const expected = 'You are a new user';
        expect(actual).equal(expected);
    });

});

