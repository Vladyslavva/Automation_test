//https://stage.pasv.us/

const { expect } = require('chai');
const email = Math.random()+'vik@gmail.com';
const firstName = 'John';

describe('Register page', () => {
    before( )
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        assert.equal(actualTitle, expectedTitle);
    });

    it('should have the correct title', () => {
        const actual =  $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    });

    it('should have the correct description', () => {
        const actual =  $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted';
        expect(actual).equal(expected);
    });

    it('should have the correct submit button text', () => {
        const actual =  $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it('should fill First Name field', () => {
        const element =  $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(2000);
    });

    it('should fill Last Name field', () => {
        const element =  $('form input[name="lastName"]');
        element.setValue('Smith');
        browser.pause(2000);
    });

    it('should fill email field', () => {
        const element =  $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000);
    });

    it('should fill About field', () => {
        const element =  $('form textarea[name="about"]');
        element.setValue('asasasa adadad adadadad');
        browser.pause(2000);
    });

    it('should fill English level dropdown', () => {
        const element =  $('form select[name="englishLevel"]');
        element.selectByVisibleText('Beginner');
        browser.pause(2000);
    });

    it('should click the button', () => {
        const element =  $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });
});

