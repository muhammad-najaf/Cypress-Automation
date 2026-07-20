export class LoginPage{
    
    userName_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'
    enterUserName(userName){
        cy.get(this.userName_textbox).type(userName)  //we can use variable in place of text & field_id/field_class
    }

    enterPassword(pass){
        cy.get(this.password_textbox).type(pass) //'this' keyword means variable is in same class
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }
}