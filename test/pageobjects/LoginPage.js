const AbstractPage = require('./AbstractPage');

class LoginPage extends AbstractPage{

    get inputUsername () { return $('#frm-name') }
    get inputPassword () { return $('#frm-password') }
    get loginButton() { return $(".login-submit") }

    open () {
        return super.open('login');
    }

    loginUser(username,password){
       this.inputUsername.setValue(username);
       this.inputPassword.setValue(password);
       this.loginButton.click();
       browser.pause(3000);
    }


}

module.exports = new LoginPage();