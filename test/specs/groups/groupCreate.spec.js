const { expect } = require('chai');
const { URL_LOGIN } = require('../user/register_data');
const {selectors, admin, groupCreate} = require('../data');
const {login} = require('../user/actions')

describe('CREATE GROUP', () => {
    before('Login as admin', () => {
        if (!login('admin')) expect.fail('wrong credentials');
    });

    it('should have the correct title', () => {
        browser.url(groupCreate.url);
        browser.pause(2000);
       expect($(selectors.groupCreate.h1).getText()).equal(groupCreate.h1);
    });

    it('should fill "Group name" field', () => {
        $(selectors.groupCreate.groupNameField).setValue(groupCreate.groupName);
    });

    it('should choose "Access type" from dropdown menu', () => {
        $(selectors.groupCreate.accessType).selectByVisibleText(groupCreate.accessType);
    });

    it('should fill "Group description" field', () => {
        $(selectors.groupCreate.groupDescription).setValue(groupCreate.groupDescription);
    });

    it('should click the Create button', () => {
        $(selectors.groupCreate.createButton).click();
        browser.pause(5000);
    });

    it('should show success message "Group created"', () => {
        browser.pause(2000);
        expect($(selectors.groupCreate.messageGroupCreated).getText()).equal(groupCreate.notification);
    });

});