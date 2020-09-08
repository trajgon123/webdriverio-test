const AbstractPage = require("./AbstractPage");


class HomePage extends AbstractPage{

    get userName(){return $("#logged-user")}

}

module.exports = new HomePage();