import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    // Testing logins that should not work and return an error.
    errorUsers = ['nonExisting_user', 'locked_out']

    // Testing logins that should work and login. 
    goodUsers = ['standard_user', 'problem_user', 'performance_glitch_user',
    'error_user', ]

    get inputUsername () { return $('#user-name'); }
    get inputPassword () { return $('#password'); }
    get loginButton () { return $('#login-button'); }
    get swagLabsHeader () { return $('.app_logo'); }
    get loginError () { return $('[data-test="error"]'); }

    /* This bit of automation code helps with entering user name
    and password along with clicking the login button */
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.loginButton.click()
    }

    /* Here we're doing a loop to enter the array of names that
    should return a login error */
    async errorUsers () {
        for (let i = 0; i < this.errorUsers.length; i++) {
            await expect(this.swagLabsHeader).toExist()
            await this.login(this.errorUsers[i], 'bad_password')
            await expect(this.loginError).toHaveTextContaining('Username and password do not match any user in this service')
            await this.login(this.errorNames[i], 'secret_sauce')
            await expect(this.errorBox).toExist()
        }
    }

    // Now the loop for the goodUsers
    async goodUsers () {
        await expect(this.swagLabsHeader).toExist()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
