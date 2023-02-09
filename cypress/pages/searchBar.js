export class SearchBar {
  static getSearchBar() {
    return cy.get("#tablet-top-search");
  }
  static getSuggestions() {
    return cy.get('[data-test-id="suggested-terms"] > li');
  }
  static getBrands() {
    return cy.get("[data-test-id=brands]");
  }
  static getBrandName() {
    return `p[class^="ResultDropdownImageItem__NamePara"]`;
  }
}

export class SignUpModal {
  static getCrossButton() {
    return cy.get('[data-test-id="modalCloseButton"]');
  }
  static getSignUpLogo() {
    return cy.get('[data-test-id="sign-up-featured-image"]');
  }
  static getModalMessage() {
    return cy.get("h4.Styles__Typography-sc-4zz2i3-0.jDkNRY");
  }
}
