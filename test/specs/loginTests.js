import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/swagLogin.js'

describe('Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(LoginPage.swagLabsHeader).toBeExisting()
        await expect(LoginPage.swagLabsHeader).toHaveTextContaining(
            'Swag Labs')
    })
})

describe('Error Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(LoginPage.loginError).toBeExisting()
        await expect(LoginPage.loginError).toHaveTextContaining(
            'Epic sadface')
    })
})

