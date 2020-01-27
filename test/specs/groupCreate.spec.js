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

    it('should fill "Group name" field', () => {
        $('input[name="name"]').setValue('QA 10');
    });

    it('should choose "Access type" from dropdown menu', () => {
        $('select[name="accessType"]').selectByVisibleText('All');
    });

    it('should fill "Group description" field', () => {
        $('input[name="description"]').setValue('Занятия проходят по ссылке https://zoom.us/');
    });

    it('should click the Create button', () => {
        $('button[type="submit"]').click();
        browser.pause(5000);
    });

    it('should show success message "Group created"', () => {
        browser.pause(2000);
        expect($('h4[class="notification-title"]').getText()).equal('Group created');
    });

});