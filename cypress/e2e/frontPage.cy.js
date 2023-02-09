import { SearchBar, SignUpModal } from "../pages/searchBar";
import { FrontPage, ReadStoryModal } from "../pages/frontPage";

const SEARCH_TERM = "perfume";

describe("Front Page", () => {
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

    it("Given a product is clicked, should let the sign in modal pop up", () => {
        SearchBar.getSuggestions().first().click();
        cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
        FrontPage.getProduct().first().click();
        SignUpModal.getSignUpLogo().should('exist');
        SignUpModal.getCrossButton().click();
    });

    it("Given a brand is clicked, should let the sign in modal pop up", () => {
        SearchBar.getBrands().first().click();
        cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
        SignUpModal.getModalMessage().should(
            "contain", 
            "Shop wholesale, online");
    });

    it("Given brand page, should have brand's location, story and year of establishment ", () => {
        SearchBar.getBrands().click();
        cy.url().should("contain", "brand");
        cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
        SignUpModal.getCrossButton().click();
        FrontPage.getBrandName().should(
            "contain",
            "Perfume Art Creation"
        );
        FrontPage.getBrandLogo().should("exist");
        FrontPage.getReadStoryButton().contains('Read Their Story').click();
        ReadStoryModal.getLocation().should("exist");
        ReadStoryModal.getStory().should("exist")
        ReadStoryModal.getEstablishedYear().should("exist");
    });
})