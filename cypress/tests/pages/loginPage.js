

class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            singUpField: "[href='/signup']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            confirmPasswordField: "[name='confirmPassword']",
            wrongPasswordFormAlert: "[data-test='signup-password']",

        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkLoginError() {

        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    signInNewUser(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().singUpField).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signInButton).click()
    }

    signInWrongPassword(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().singUpField).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)

    }

    checkSignUpError() {
        cy.get(this.selectorsList().wrongPasswordFormAlert)
    }

}

export default LoginPage