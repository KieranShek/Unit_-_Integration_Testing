describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should have working operation buttons', ()=>{
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
  it('should allow multiple operations in a row', ()=>{
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })
  it('should allow a range of outputs',()=>{
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-11110.1')
  })
  it('should return undefined', ()=>{
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "undefined")
  })
})