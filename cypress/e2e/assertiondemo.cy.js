it('Assertion demo', () => {
    cy.visit('https://example.cypress.io').wait(3000)
    cy.contains('get').click()
    cy.get('#query-btn').should('contain','Button')
})