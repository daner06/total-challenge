describe('Main page', () => {
  it('Should render the page correctly', () => {
    cy.visit('http://localhost:3000');
  });
  it('Should have a page title with the name "Coding Challenge".', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('eq', 'Coding Challenge');
  })
  it('Should have a header 3 element', () => {
    cy.visit('http://localhost:3000');
    cy.get('h3').should('exist');
  });
  it('Should have a header 3 that has the partial text "Coding challenge".', () => {
    cy.visit('http://localhost:3000');
    cy.get('h3').should('include.text','Coding challenge')
  });
  it('Should have 4 buttons', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').its('length').should('eq', 4);
  });
  it('Should have an svg chart', () => {
    cy.visit('http://localhost:3000');
    cy.get('svg').should('exist');
  });
});
