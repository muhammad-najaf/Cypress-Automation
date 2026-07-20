
 before(function(){
     cy.fixture('test.json').as('test_data') //now we can use this test_data to access any jason element
 })


it('Read files using fixtures', function(){
    // cy.fixture('example').then((data) => {
    //     cy.log(data.name)
    //     cy.log(data.email)
    // })

    var max=4
    var min=0
    var test = Math.floor(Math.random() * (max - min + 1)) + min
    //cy.log(test)

    cy.log(this.test_data[test].name)
    cy.log(this.test_data[test].email)
})

it('Write file demo', function(){
    
})