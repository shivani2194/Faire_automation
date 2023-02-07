const selectors = {
    logo: '.styled__HeaderLink-sc-5jt07x-1 > img'
}

export class homePage {
    static logo(){
        return cy.get(selectors.logo)
    }
}