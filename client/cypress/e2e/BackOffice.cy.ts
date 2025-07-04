describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByDataTest("back-office-link").click();
  });

  it("should display the product table", () => {
    const productList = cy.getByDataTest("product-table");
    productList.should("be.visible");
  });

  it("should be able to add and remove a product", () => {
    cy.getByDataTest("add-new-product-button").should("be.visible");
    cy.getByDataTest("add-new-product-button").click();

    cy.getByDataTest("product-form").should("be.visible");
    cy.getByDataTest("name-form-field").clear().type("AAAA TEST");
    cy.getByDataTest("base-price-form-field").clear().type("1.49");
    cy.getByDataTest("form-submit-button").click();

    cy.getByDataTest("edit-product-button").eq(0).click();
    cy.getByDataTest("name-form-field").clear().type("AAAAA TEST");
    cy.getByDataTest("base-price-form-field").clear().type("1.69");
    cy.getByDataTest("offer-quantity-form-field").clear().type("3");
    cy.getByDataTest("offer-price-form-field").clear().type("4.49");
    cy.getByDataTest("form-submit-button").click();

    cy.getByDataTest("delete-product-button").eq(0).click();
    cy.getByDataTest("confirm-dialog").should("be.visible");
    cy.getByDataTest("confirm-dialog").getByDataTest("cancel-button").click();

    cy.getByDataTest("confirm-dialog").should("not.exist");
    cy.getByDataTest("delete-product-button").eq(0).click();
    cy.getByDataTest("confirm-dialog").getByDataTest("confirm-button").click();

    cy.contains("AAAAA TEST").should("not.exist");
  });
});
