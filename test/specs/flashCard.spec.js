const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE FLASH CARD', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('ymd@list.ru');
        $('form input[name="password"]').setValue('123000');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    it('should have the correct title', () => {
        browser.url('https://stage.pasv.us/flash');
        browser.pause(2000);
        expect($('h1').getText()).equal('FlashCards');
    });

    it('should click the "Create new FlashGroup" button', () => {
        $('button[qa="flash-create-new-group"]').click();
        browser.pause(3000);
    });

    // it('should open a new modal window with correct title', () => {
    //     expect($('h5[class="modal-title"]')).equal('Create Flash Group\n');
    // });

    it('should fill "Group name" field', () => {
        $('input[name="name"]').setValue('QA Basics');
    });

    it('should fill "Group description" field', () => {
        $('input[name="description"]').setValue('Shows basic knowledge in QA');
    });

    it('should click the Create button', () => {
        $('button[class="btn btn-primary"]').click();
        browser.pause(3000);
    });

});

