import LoginPage from '../pageobjects/swagLogin.js'

describe('Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })
})

describe('Error Login to SwagLabs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('standard_user', 'randomPassw0rd')
        await LoginPage.login('locked_out_user', 'secret_sauce')
    })
})

