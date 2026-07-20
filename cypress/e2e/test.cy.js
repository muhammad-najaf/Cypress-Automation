beforeEach(() => {
    // Ignore uncaught errors in the console
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

it('HIS issue', () => {
    const randomText1 = Math.random().toString(36).substring(2, 15); // random alphanumeric string
    const randomText2 = Math.random().toString(36).substring(2, 15);
    cy.visit('http://demo-his.oomi.co.uk/')
    cy.get('[href="/training-events/"]').click()
    cy.get('.row > :nth-child(2) > .featured-content-actions > .button-reverse').click()
    cy.get(':nth-child(7) > .linkbox > .linkbox-content > .linkbox-actions > a').click()
    cy.get('.usercontent > :nth-child(3) > a').click()

    cy.get('#FirstName').type(randomText1) //first name
    cy.get('#LastName').type('spider') //last name
    cy.get('#registerModel_Email').type(randomText1 + 'spider' + '@yopmail.com') //email
    cy.get('#pass1').type(randomText2) //password
    cy.get('#pass2').type(randomText2) //re-type pass
    cy.get('#countryId').select('United Kingdom') //country from list
    //cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click() //captcha click
    //cy.get('#btnRegister') //register btn



    //cy.get('#APjFqb').type('Automation step by step {enter}')
    // cy.get('.FPdoLc > center > .gNO89b').click()
})