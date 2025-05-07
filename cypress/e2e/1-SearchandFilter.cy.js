describe('Mentor Discovery & Filtering', () => {
  beforeEach(() => {
    cy.visit('https://dealls.com/mentoring'); // baseUrl
  });

  it('Searching for mentor by full name', () => {
    //step action
    cy.get('#searchMentor').type('Janrico Martua Sinaga');

    //expected result
    cy.contains('h4', 'Janrico Martua Sinaga').should('be.visible');
  });

  it('Searching for mentor by expertise', ()=> {
    //step action
    cy.get('#searchMentor').type('Software Quality Assurance');

    //expected result
    cy.contains('div', 'Software Quality Assurance').should('be.visible');
  });

  it('Filter Karier tab by Business category and verify result', () => {
    // Klik kategori Business
    cy.contains('a', 'Business')
      .should('be.visible')
      .click();
  });
  
});