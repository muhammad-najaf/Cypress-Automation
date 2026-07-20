describe('template spec', () => {


  beforeEach(() => {
    // Ignore uncaught errors in the console
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  before('passes', () => {
    cy.visit('https://staging-sfe.oomi.co.uk').wait(10000);
  });

  it('login',() => {
    cy.get('#UserName').type('marinaspider197@yopmail.com');
    cy.get('#Password').type('123456789');
    cy.get('.section-primary-button').click();
    
    //assertion lines
    cy.url().should('eq', 'https://staging-sfe.oomi.co.uk/account/Dashboard');
    cy.get('h1').should('have.text','Welcome to your Dashboard');
    cy.contains('h1', 'Welcome').should('be.visible');

      cy.get(':nth-child(7) > .ui-tabs-anchor').click();
      cy.get('#edit-keywords-wrapper > .views-widget > .form-item > .form-text').type('Marina');
      //cy.get('#edit-submit-courses').click();

      cy.get('#country').select('Sweden').wait(1000);
      cy.get('#edit-submit-courses').click();

      cy.get('#edit-keywords-wrapper > .views-widget > .form-item > .form-text').clear();
      cy.get('#edit-submit-courses').click();
  });

});