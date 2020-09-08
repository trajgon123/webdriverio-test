const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');

describe('My Login application', () => {
    it("test prihlaseni", () => {
        var windowHandle = browser.windowHandle();
        browser.windowHandleMaximize('{'+windowHandle.value+'}');

        LoginPage.open()
        LoginPage.loginUser("","")
        expect(HomePage.userName.isDisplayed)
        browser.pause(6000);
    });
});


