const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('ymd@list.ru');
        $('form input[name="password"]').setValue('123000');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

  it('should have the correct title', () => {
      browser.url('https://stage.pasv.us/diary/create');
      browser.pause(2000);
      expect($('h1').getText()).equal('Create day report');
  });

  it('should mark needed checkboxes from "Marks to your daily report"', () => {
        $('input[id="input-[1]"]').click();
        $('input[id="input-[3]"]').click();
        $('input[id="input-[4]"]').click();
        $('input[id="input-[5]"]').click();
        $('input[id="input-[6]"]').click();
    });
  it('should choose "What is your morale?" from dropdown menu', () => {
        $('select[name="morale"]').selectByVisibleText('7');
    });

    it('should fill "How many hours did you study/practice today?" box', () => {
        $('input[name="hours"]').click();
        $('input[name="hours"]').setValue(5);
    });

    it('should fill "How was your day" box', () => {
        $('textarea[name="description"]').click();
        $('textarea[name="description"]').setValue('Viewed missed lesson, solved 3 katas on CW');
    });

    it('should click the Submit button', () => {
        $('button[type="submit"]').click();
    });

    it('should show success message "Diary created"', () => {
        browser.pause(2000);
        expect($('h4[class="notification-title"]').getText()).equal('Diary created');
    });

});


