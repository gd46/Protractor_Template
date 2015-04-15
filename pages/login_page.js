var LoginPage = (function () {
    function LoginPage() {
        // this.emailField = element(By.input("user.email"));
        // this.passwordField = element(By.input("user.password"));
        // this.loginButton = element(By.id("log-in"));
        // this.currentUser = element(By.binding("{{currentUser.name}}"));
        this.emailField = element(by.model('email'));
        this.passwordField = element(by.model('password'));
        this.loginButton = element(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button'));
    }

    LoginPage.prototype.visitPage = function () {
        browser.get("https://demo.monimus.me");
    };

    LoginPage.prototype.typeEmail = function (email) {
        this.emailField.sendKeys(email);
    };

    LoginPage.prototype.typePassword = function (password) {
        if (password == null) {
            password = "password";
        }
        this.passwordField.sendKeys(password);
    };

    LoginPage.prototype.login = function () {
        this.loginButton.click();
    };

    // LoginPage.prototype.getCurrentUser = function () {
    //     return this.currentUser.getText();
    // };

    return LoginPage;

})();

module.exports = LoginPage;