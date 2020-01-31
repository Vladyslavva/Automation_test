const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');
const {pageFlashCards, selectors, admin} = require('./data');

describe('CREATE FLASH CARD', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('ymd@list.ru');
        $('form input[name="password"]').setValue('123000');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    it('should have the correct title', () => {
        browser.url(pageFlashCards.url);
        browser.pause(2000);
        expect($(selectors.pageFlashCards.h1).getText()).equal(pageFlashCards.h1);
    });

    it('should click the "Create new FlashGroup" button', () => {
        $(selectors.pageFlashCards.createButton).click();
        browser.pause(3000);
    });

    it('should open a new modal window with correct title', () => {
        expect($(selectors.pageFlashCards.modalWindowTitle).getText()).equal(pageFlashCards.createFlashGroup);
    });

    it('should fill "Group name" field', () => {
        $(selectors.pageFlashCards.groupNameField).setValue(pageFlashCards.groupName);
    });

    it('should fill "Group description" field', () => {
        $(selectors.pageFlashCards.groupDescriptionField).setValue(pageFlashCards.groupDescription);
    });

    it('should click the Create button', () => {
        $(selectors.pageFlashCards.confirmButton).click();
        browser.pause(3000);
    });

    it('should show confirmation message', () => {
       expect($(selectors.pageFlashCards.notificationTitle).getText()).equal(pageFlashCards.getAllFlashCardsGroup)
    });


});

