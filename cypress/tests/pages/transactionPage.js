import { request } from "http"


class TransactionPage {
    
    selectorsList() {
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            searchNameField: "[type='text']",
            nameSearched: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[name='amount']",
            addNoteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            amountError: "[data-test='transaction-create-amount-input']",
            requestButton: "[data-test='transaction-create-submit-request']",
    
        }
        return selectors
    }


    accessTransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    searchName(name) {
        cy.get(this.selectorsList().searchNameField).should('be.visible').click({force: true})
        cy.get(this.selectorsList().searchNameField).type(name)
        cy.get(this.selectorsList().nameSearched).click()
    }

    fillAmount(amount) {
        cy.get(this.selectorsList().amountField).click()
        cy.get(this.selectorsList().amountField).type(amount)
        
    }

    fillNote(note) {
        cy.get(this.selectorsList().addNoteField).click()
        cy.get(this.selectorsList().addNoteField).type(note)
    }

    payTransaction() {
        cy.get(this.selectorsList().payButton).click()
    }

    checkAmountError() {
        cy.get(this.selectorsList().amountError)
    }

    requestMoneyButton() {
        cy.get(this.selectorsList().requestButton).click()
    }

}

export default TransactionPage;