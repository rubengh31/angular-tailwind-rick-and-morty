describe('Crud', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/crud');
  });

  it('Load data table', () => {
    // ✅ RESPOND WITH OBJECT
    cy.fixture('../fixtures/crud/read-products.json').then((products) => {
      cy.intercept('GET', 'https://api.escuelajs.co/api/v1/products', {
        body: products,
      }).as('products');
    });
  });

  it('Fill information and add new product', () => {
    cy.get('[data-cy="crud-input-title"]').click();
    cy.get('[data-cy="crud-input-title"]').type('title');
    cy.get('[data-cy="crud-input-price"]').click();
    cy.get('[data-cy="crud-input-price"]').type('price');
    cy.get('[data-cy="crud-input-description"]').click();
    cy.get('[data-cy="crud-input-description"]').type('description');

    cy.get('[data-cy="crud-product-button-add"]').trigger('mouseover');
    cy.get('[data-cy="crud-product-button-add"]').should('not.be.disabled');
    cy.get('[data-cy="crud-product-button-add"]').click();

    // ✅ RESPOND WITH OBJECT
    cy.fixture('../fixtures/crud/create-product.json').then((product) => {
      cy.intercept('POST', 'https://api.escuelajs.co/api/v1/products', {
        body: product,
      }).as('product');
    });
  });

  it('Edit an existent product', () => {
    cy.get('button[data-cy="crud-product-edit-from-table"]')
      .last()
      .trigger('mouseover');
    cy.get('button[data-cy="crud-product-edit-from-table"]').last().click();

    cy.get('[data-cy="crud-input-title"]').click();
    cy.get('[data-cy="crud-input-title"]').focus().clear();
    cy.get('[data-cy="crud-input-title"]').type('Edited with Cypress!');

    cy.get('[data-cy="crud-input-price"]').click();
    cy.get('[data-cy="crud-input-price"]').focus().clear();
    cy.get('[data-cy="crud-input-price"]').type('212');

    cy.get('[data-cy="crud-input-description"]').click();
    cy.get('[data-cy="crud-input-description"]').focus().clear();
    cy.get('[data-cy="crud-input-description"]').type('CoreA5-8250U');

    cy.get('[data-cy="crud-product-button-edit"]').trigger('mouseover');
    cy.get('[data-cy="crud-product-button-edit"]').should('not.be.disabled');
    cy.get('[data-cy="crud-product-button-edit"]').click();
    cy.get('[data-cy="crud-product-button-edit"]');

    // ✅ RESPOND WITH OBJECT
    cy.fixture('../fixtures/crud/update-product.json').then((product) => {
      cy.intercept('PUT', 'https://api.escuelajs.co/api/v1/products/47', {
        body: product,
      }).as('product');
    });
  });

  it('Clean form pressing button cancel', () => {
    cy.get('button[data-cy="crud-product-edit-from-table"]')
      .last()
      .trigger('mouseover');
    cy.get('button[data-cy="crud-product-edit-from-table"]').last().click();

    cy.get('[data-cy="crud-product-button-cancel"]').should('not.be.disabled');
    cy.get('button[data-cy="crud-product-button-cancel"]').click();
    cy.get('[data-cy="crud-input-title"]').focus().clear();
    cy.get('[data-cy="crud-input-price"]').focus().clear();
    cy.get('[data-cy="crud-input-description"]').focus().clear();
  });

  it('Remove an existent product', () => {
    cy.get('button[data-cy="crud-product-remove-from-table"]')
      .last()
      .trigger('mouseover');
    cy.get('button[data-cy="crud-product-remove-from-table"]').last().click();

    // ✅ RESPOND WITH OBJECT
    cy.fixture('../fixtures/crud/update-product.json').then(() => {
      cy.intercept('DELETE', 'https://api.escuelajs.co/api/v1/products/47').as(
        'product'
      );
    });
  });
});
