const { URL_LOGIN } = require('../user/register_data');
const {selectors, admin, student} = require('../data');

function login (userRole) {
    let email;
    let password;
    switch (userRole) {
        case 'admin':
            email = admin.email;
            password = admin.password;
            break;
        case 'student':
            email = student.email;
            password = student.password;
            break;
        default:
            console.log('this role does not exist');
            return false;
    }
    browser.url(URL_LOGIN);
    $(selectors.login.email).setValue(email);
    $(selectors.login.password).setValue(password);
    $(selectors.login.submitButton).click();
    browser.pause(1000);
    return true;

}

function logout () {
    $(selectors.logout.dropDown).click();
    browser.pause(1000);
    $(selectors.logout.logout).click();
    browser.pause(1000);
}



module.exports = {login, logout};