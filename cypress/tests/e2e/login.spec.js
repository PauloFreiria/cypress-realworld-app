import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js';

const loginPage = new LoginPage();

describe('Real World App Test', () => {

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

})