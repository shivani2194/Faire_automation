import { homePage } from '../pages/homePage'

describe('template spec', () => {

 
    beforeEach(() => {
        cy.intercept('GET', '/').as(
            'landingPage'
        )
      })
  it('Verify if the base URL navigates to expected landing page', () => {
    cy.visit('/')
    //moved permanentaly redirect: 301 status code
    cy.wait('@landingPage').its('response.statusCode').should('eq', 301)
    cy.url().should('contain', 'faire.com')
    homePage.logo().should('exist')
   })
})
