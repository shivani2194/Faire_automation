import { SearchBar, SignUpModal } from "../pages/searchBar";
import { FrontPage } from "../pages/frontPage";

const SEARCH_TERM = "perfume";

describe("Search Suggestions", () => {
  beforeEach(() => {
    cy.intercept("GET", "/").as("landingPage");
    cy.intercept("POST", "/api/v2/search/suggestions").as("searchSuggestions");
    cy.intercept("GET", "/api/alert-banner?page_type=DEFAULT").as("signupPage");
    cy.visit("/");
    cy.wait("@landingPage").its("response.statusCode").should("eq", 301);
    SearchBar.getSearchBar().type(SEARCH_TERM, { delay: 200 });
    SearchBar.getSearchBar().should("have.value", SEARCH_TERM);
    cy.wait("@searchSuggestions").its("response.statusCode").should("eq", 200);
  });

  it("Given search term in the search bar, should return relevant suggestions and brands", () => {
    SearchBar.getSuggestions().each(($el) => {
      cy.wrap($el).find(`span:contains(${SEARCH_TERM})`).should("exist");
    });

    SearchBar.getBrands().should("exist");
    //Verifying if the brand section search results has logo and brand name
    SearchBar.getBrands().each(($li) => {
      cy.wrap($li).find("img").should("exist");
      cy.wrap($li).find(SearchBar.getBrandName()).should("not.be.empty");
    });
  });

  it("Given suggestion category search results, should navigate to respective page", () => {
    SearchBar.getSuggestions().first().click();
    cy.url().should("contain", SEARCH_TERM);
    cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
    SignUpModal.getCrossButton().click();
    //Verifying if the search term is present on the product lading page
    SearchBar.getSearchBar().invoke("val").as("productName");
    cy.get("@productName").then((productName) => {
      FrontPage.getProductName().should("contain", productName);
    });
  });

  it("Given brand category search results, should navigate to respective page", () => {
    SearchBar.getBrands().click();
    cy.url().should("contain", "brand");
    cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
    SignUpModal.getCrossButton().click();
    FrontPage.getBrandName().should(
      "contain", 
      "Perfume Art Creation");
    FrontPage.getBrandLogo().should("exist");
    FrontPage.getReadStoryButton().should("exist");
  });
});
