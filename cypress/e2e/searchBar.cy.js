import { searchBar } from '../pages/searchBar'

let searchTerm = 'perfume'

describe('Search functionality', () => {

 
    beforeEach(() => {
        cy.intercept('GET', '/').as(
            'landingPage'
        )
        cy.intercept('POST', '/api/v2/search/suggestions').as('searchSuggestions')
        cy.intercept('GET', '/api/alert-banner?page_type=DEFAULT').as('signupPage')
        cy.visit('/')
        cy.wait('@landingPage').its('response.statusCode').should('eq', 301)
        searchBar.searchBar().type(searchTerm)
        cy.wait('@searchSuggestions').its('response.statusCode').should('eq', 200)
      })

  it.only('Verify if the search operation returns relevant suggestions and brands', () => {
    searchBar.searchResultSuggestions().should('contain', searchTerm)
    searchBar.searchResultBrands().should('exist')
    console.log('brands', cy.get('[data-test-id="brands"]'))
    cy.get('[data-test-id="brands"]').each(($el) => {
        console.log($el)
        //$el.find('li')
        searchBar.brandImage().should('exist')
        searchBar.brandName().should('exist')
    })
    //searchBar.brandImage().should('exist')
    //searchBar.brandName().should('exist')
   })

   it('Verify if the search result navigates to respective page: Suggestion category', () => {
    
    searchBar.searchResultSuggestions().click()
    cy.url().should('contain', searchTerm)
    cy.wait('@signupPage').its('response.statusCode').should('eq', 204)
    searchBar.crossButton().click()
    searchBar.searchBar().invoke('val').as('brandName')
    cy.get('@brandName').then(brandName => {
        searchBar.productNameOnNavigatedPage().should('contain', brandName)
     });
    })

   it('Verify if the search result navigates to respective page: Brand category', () => {
    searchBar.searchResultBrands().click()
    cy.url().should('contain', 'brand')
    cy.wait('@signupPage').its('response.statusCode').should('eq', 204)
    searchBar.crossButton().click()
    searchBar.brandNameOnNavigatedPage().should('contain', 'Perfume Art Creation' )
    searchBar.brandLogo().should('exist')
    searchBar.readStoryButton().should('exist')
   })

})