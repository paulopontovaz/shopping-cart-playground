describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByDataTest("home-link").click();
  });

  it("should display a list of products", () => {
    const productList = cy.getByDataTest("product-list");
    productList.should("be.visible");
    productList
      .getByDataTest("product-card")
      .should("have.length.greaterThan", 0);
  });

  it("should update values when adding/removing a product", () => {
    const productCard = cy.getByDataTest("product-card").eq(0);
    productCard.getByDataTest("product-name").should("be.visible");
    productCard.getByDataTest("product-name").should("contain", "Apple");
    productCard.getByDataTest("product-quantity").should("contain", "(0)");

    const addButton = productCard.getByDataTest("product-add-button").eq(0);
    addButton.should("be.visible");
    addButton.click();
    addButton.click();
    addButton.click();

    productCard.getByDataTest("product-quantity").should("contain", "(3)");

    cy.getByDataTest("shopping-cart-title").should("be.visible");
    cy.getByDataTest("shopping-cart-title").should("contain.text", "2,97");

    const removeButton = productCard
      .getByDataTest("product-remove-button")
      .eq(0);
    removeButton.should("be.visible");
    removeButton.click();
    removeButton.click();
    cy.getByDataTest("shopping-cart-title").should("contain.text", "0,99");

    const clearButton = productCard.getByDataTest("product-clear-button").eq(0);
    clearButton.should("be.visible");
    clearButton.click();
    cy.getByDataTest("shopping-cart-title").should("contain.text", "-");
  });

  it("should update values when adding different products", () => {
    const appleAddButton = cy.getByDataTest("product-add-button").eq(0);
    appleAddButton.should("be.visible");
    appleAddButton.click();
    appleAddButton.click();
    appleAddButton.click();

    cy.getByDataTest("cart-item-quantity-and-name")
      .eq(0)
      .should("contain.text", "3 x Apple");
    cy.getByDataTest("shopping-cart-title").should("contain.text", "2,97");

    // Bread has a special offer when buying two.
    const breadAddButton = cy.getByDataTest("product-add-button").eq(2);
    breadAddButton.should("be.visible");
    breadAddButton.click();
    breadAddButton.click();

    cy.getByDataTest("cart-item-quantity-and-name")
      .eq(1)
      .should("contain.text", "2 x Bread");
    cy.getByDataTest("shopping-cart-title").should("contain.text", "5,46");
  });
});
