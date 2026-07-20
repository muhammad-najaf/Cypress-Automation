/// <reference types="cypress"/>


export class DemoIFST{

    //Login function
    login(){
         cy.fixture('LoginDetailsIFST.json').then((data) => {
         cy.visit(data[0].Link) //visit url
         cy.get('#LoginEmail').type(data[0].Email)  //Pick email from json 
         cy.get('.input-group > .form-control').type(data[0].Password) //pick password from json
         cy.get('.btn').click() //Login button
    })
    }
    
    //navigate to contact page
    navToContact(){
        cy.get(':nth-child(2) > .waves-effect').click()  //CRM button
        cy.get('.mm-show > :nth-child(3) > a').click()  // Contacts Button
    }

    addNewContact(){
        cy.get(':nth-child(4) > .btn').click()  //add button

        //General details which are not mandatory, through fixture file General IFST
        cy.fixture('GeneralIFST').then((form) => {
            //title fetched
            cy.get('#Attribute005').type(form[0].Title[0]).wait(6000)  
            cy.get('#ui-id-32').should('be.visible')
            cy.contains('#ui-id-32', form[0].Title[0]).click()
            //job title
            cy.get('#Attribute032').type(form[0].JobTitle)
        })

        //General details which are mandatory, through fixture file General IFST
        cy.fixture('GeneralMandatoryIFST').then((man) => {
            cy.get('#Attribute006').type(man[0].FirstName)
            cy.get('#Attribute008').type(man[0].LastName)
            cy.wait(3000)
            //cy.get('#Attribute001').type(man[0].LabelName)
        })

        //Address
        cy.fixture('AddressContactIFST').then((addr) => {
            cy.get('#CONTACT_ADDRESSES_Accordian > .card > .card-header > .mb-0 > .btn').click()
            cy.get('#Attribute042').type(addr[0].MailingAddressPostcode)
        })

        cy.fixture('ContactDetailsIFSTC').then((cont) => {
            cy.get('#Attribute066').type(cont[0].PrimaryPhone)
            cy.get('#Attribute069').type(cont[0].PrimaryEmail)
            cy.get('#cb-Attribute302').check()
            cy.get('#Attribute359').attachFile('images.png')
            cy.wait(3000)
        }) 

    }


    saveAndViewContact(){
        cy.get(':nth-child(2) > [onclick="needToConfirm=false;CheckValidations();"]').click()
    }

    //Account Creation Functions

    navToAccount(){
        cy.get(':nth-child(2) > .waves-effect').click()
        cy.get('.mm-show > :nth-child(4) > a').click()
    }

    addNewAccount(){
        cy.get(':nth-child(4) > .btn').click()
        cy.fixture('AcGeneralIFST').then((acc) => {
            cy.get('#Attribute001').type(acc[0].AccountName)
            // cy.get('#Attribute029').type('  ')
            // //cy.get('#ui-id-164').should('be.visible')
            // cy.get('#ui-id-164').contains('| 175565').click()

            cy.get('#cb-Attribute393').check()  //University checkbox button

            //address section
            cy.get('#ACCOUNT_ADDRESSES_Accordian > .card > .card-header > .mb-0 > .btn').click()
            cy.get('#Attribute039').type(acc[0].PostalCode)
            cy.get('#Attribute034').type(acc[0].MailingAddressLine1)

        })
    }

    saveAndViewAccount(){
        cy.get(':nth-child(2) > [onclick="needToConfirm=false;CheckValidations();"]').click()
        cy.wait(5000)
    }


}