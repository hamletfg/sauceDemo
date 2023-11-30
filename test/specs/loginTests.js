import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/swagLogin.js'

describe('Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(LoginPage.notificationPopUp).toBeExisting()
        await expect(LoginPage.notificationPopUp).toHaveTextContaining(
            'Swag Labs')
    })
})

