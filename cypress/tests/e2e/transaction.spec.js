import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js';
import TransactionPage from '../pages/transactionPage.js';

const loginPage = new LoginPage();
const transactionPage = new TransactionPage();


describe('RWA Money Transaction Test', () => {

  it('Sending Money - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    transactionPage.accessTransactionPage();
    transactionPage.searchName(userData.searchNameTransaction.name);
    transactionPage.fillAmount(userData.amountTransaction.amount);
    transactionPage.fillNote(userData.addNoteTransaction.note1);
    transactionPage.payTransaction();

  })

  it('Sending Money - Failure', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    transactionPage.accessTransactionPage();
    transactionPage.searchName(userData.searchNameTransaction.name);
    transactionPage.fillAmount(userData.amountTransaction.wrongAmount);
    transactionPage.checkAmountError();

  })

  it('Requesting Money - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    transactionPage.accessTransactionPage();
    transactionPage.searchName(userData.searchNameTransaction.name);
    transactionPage.fillAmount(userData.amountTransaction.requestAmount);
    transactionPage.fillNote(userData.addNoteTransaction.note2);
    transactionPage.requestMoneyButton();

  })




 
})