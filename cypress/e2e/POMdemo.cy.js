import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

it('Automation', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})