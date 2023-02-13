export class FrontPage {
  static getBrandName() {
    return cy.get("span.notranslate");
  }
  static getProductName() {
    return cy.get(
      "p.Styles__Typography-sc-4zz2i3-0.SearchProductsHeader__SubHeader-sc-gui52u-1.ldNIxK.jyRmmQ"
    );
  }
  static getReadStoryButton() {
    return cy.get("button.Button__StyledButton-sc-11ipfap-1.bYyNRa");
  }
  static getBrandLogo() {
    return cy.get("img.Avatar__Image-sc-32jcmg-0.aqCdt");
  }
  static getProduct() {
    return cy.get('[data-test-id="handler-visible-container-product-tile"]');
  }
}

export class ReadStoryModal {
  static getContent() {
    return cy.get(".StoryModal__MakerFactsSection-sc-vqfals-4 > :nth-child(6)")
  }
  static getStory() {
    return cy.get("p.StoryModal__StoryContainer-sc-vqfals-6");
  }
  static getEstablishedYear() {
    return cy.get(".StoryModal__MakerFactsSection-sc-vqfals-4>:nth-child(14)");
  }
}
