import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/swagLogin.js'

describe('Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await loginPage.login('standard_user', 'secret_sauce')
        await expect(loginPage.notificationPopUp).toBeExisting()
        await expect(loginPage.notificationPopUp).toHaveTextContaining(
            'Swag Labs')
    })
})

