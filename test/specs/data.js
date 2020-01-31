
const admin = {
    email: 'ymd@list.ru',
    password: '123000'
};

const selectors = {
    login: {
        email: 'form input[name="email"]',
        password: 'form input[name="password"]',
        submitButton: 'form button[type="submit"]',
    },
    pageDayReportCreate: {
        h1: 'h1',
        iUnderstoodEverything: 'input[label="I understood everything"]',
        watchedLectures: 'input[label="Watched lectures"]',
        readDocumentation: 'input[label="Read documentation"]',
        codePractice: 'input[label="Code practice"]',
        quizPractice: 'input[label="Quiz practice"]',
        morale: 'select[name="morale"]',
        hoursPractice: 'input[name="hours"]',
        dayDescription: 'textarea[name="description"]',
        submitButton: 'button[type="submit"]',
        getLast50DaysReport: 'h4[class="notification-title"]',
    },
    pageFlashCards: {
        h1: 'h1',
        createButton: 'button[qa="flash-create-new-group"]',
        modalWindowTitle: 'h5[class="modal-title"]',
        groupNameField: 'input[name="name"]',
        groupDescriptionField: 'input[name="description"]',
        confirmButton: 'button[class="btn btn-primary"]',
        notificationTitle: 'h4[class="notification-title"]',
    }
};

const pageDayReportCreate = {
    url: 'https://stage.pasv.us/diary/create',
    h1: 'Create day report',
};

const pageFlashCards = {
    url: 'https://stage.pasv.us/flash',
    h1: 'FlashCards',
    createFlashGroup: 'Create Flash Group',
    groupName: 'QA Basics',
    groupDescription: 'Shows basic knowledge in QA',
    getAllFlashCardsGroup: 'Get all Flash cards groups',

};




module.exports = {admin, selectors, pageDayReportCreate, pageFlashCards};