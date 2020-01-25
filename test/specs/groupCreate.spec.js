const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE GROUP', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('ymd@list.ru');
        $('form input[name="password"]').setValue('123000');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    it('should have the correct title', () => {
        browser.url('https://stage.pasv.us/group/create');
        browser.pause(2000);
       expect($('h1').getText()).equal('Create new Group');
    });

});