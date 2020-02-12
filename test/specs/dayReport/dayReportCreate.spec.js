const { expect } = require('chai');
const { URL_LOGIN } = require('../user/register_data');
const {admin, selectors, pageDayReportCreate} = require('../data');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(selectors.login.email).setValue(admin.email);
        $(selectors.login.password).setValue(admin.password);
        $(selectors.login.submitButton).click();
        browser.pause(1000);
    });

  it('should have the correct title', () => {
      browser.url(pageDayReportCreate.url);
      browser.pause(2000);
      expect($(selectors.pageDayReportCreate.h1).getText()).equal(pageDayReportCreate.h1);
  });

  it('should mark needed checkboxes from "Marks to your daily report"', () => {
        $(selectors.pageDayReportCreate.iUnderstoodEverything).click();
        $(selectors.pageDayReportCreate.watchedLectures).click();
        $(selectors.pageDayReportCreate.readDocumentation).click();
        $(selectors.pageDayReportCreate.codePractice).click();
        $(selectors.pageDayReportCreate.quizPractice).click();
    });
  it('should choose "What is your morale?" from dropdown menu', () => {
        $(selectors.pageDayReportCreate.morale).selectByVisibleText('7');
    });

    it('should fill "How many hours did you study/practice today?" box', () => {
        $(selectors.pageDayReportCreate.hoursPractice).click();
        $(selectors.pageDayReportCreate.hoursPractice).setValue(5);
    });

    it('should fill "How was your day" box', () => {
        $(selectors.pageDayReportCreate.dayDescription).click();
        $(selectors.pageDayReportCreate.dayDescription).setValue('Viewed missed lesson, solved 3 katas on CW');
    });

    it('should click the Submit button', () => {
        $(selectors.pageDayReportCreate.submitButton).click();
    });

    it('should show success message "Get last (50) day reports"', () => {
        browser.pause(2000);
        expect($(selectors.pageDayReportCreate.getLast50DaysReport).getText()).equal('Get last (50) day reports');
    });

});


