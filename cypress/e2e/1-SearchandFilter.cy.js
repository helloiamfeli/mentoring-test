describe('Mentor Discovery & Filtering', () => {
  beforeEach(() => {
    cy.visit('https://dealls.com/mentoring');
  });

  it('Searching for mentor by full name', () => {
    cy.get('#searchMentor').type('Janrico Martua Sinaga');
    cy.contains('h4', 'Janrico Martua Sinaga').should('be.visible');
  });

  it('Searching for mentor by expertise', ()=> {
    cy.get('#searchMentor').type('Software Quality Assurance');
    cy.contains('div', 'Software Quality Assurance').should('be.visible');
  });

  it('Filter Karier tab by Business category and verify result', () => {
    cy.contains('a', 'Business').should('be.visible').click();
  });
  
});