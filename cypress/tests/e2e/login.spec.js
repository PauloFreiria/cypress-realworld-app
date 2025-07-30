import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js';

const loginPage = new LoginPage();

describe('RWA Login & SignUp Test', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser

    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
  })

  it('Login - Failure', () => {   
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFailure.username, userData.userFailure.password);
    loginPage.checkLoginError();

  })

  it('Sign Up - Success', () => {
    loginPage.accessLoginPage();
    loginPage.signInNewUser(
      userData.signUpUser.firstName,
      userData.signUpUser.lastName,
      userData.signUpUser.username,
      userData.signUpUser.password,
      userData.signUpUser.confirmPassword
    );
  })

  it('Sign Up - Failure', () => {
    loginPage.accessLoginPage();
    loginPage.signInWrongPassword(
      userData.signUpWrongPassword.firstName,
      userData.signUpWrongPassword.lastName,
      userData.signUpWrongPassword.username,
      userData.signUpWrongPassword.password,
      userData.signUpWrongPassword.confirmPassword
    );
    loginPage.checkSignUpError();
  })
 
})