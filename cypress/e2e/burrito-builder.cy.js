describe('Burrito builder', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a header', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('should have a form with buttons', () => {
    cy.get('form').find('button').its('length').should('eq', 13)
  })

  it('should start with nothing selected', () => {
    cy.get('form').contains('Order: Nothing selected')
  })

  it('should be able to place an order', () => {
    cy.get('input').type('Good Burrito')
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="carnitas"]').click()
  })

  it('should not be able to place an order without a name' , () => {
    cy.get('[name="beans"]').click()
    cy.get('form').find(':nth-child(15)').click()
    cy.get('p').contains('Please complete your order ...')
  })

  it('should not be able to place an order without at least one ingredient' , () => {
    cy.get('input').type('Good Burrito')
    cy.get('form').find(':nth-child(15)').click()
    cy.get('p').contains('Please complete your order ...')
  })
})