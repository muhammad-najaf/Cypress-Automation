/// <reference types="cypress"/>

it('File upload demo', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})