export const visitMentorPage = () => {
  cy.visit('https://dealls.com/mentoring/melinda-thea-rahmani-salim-876');
};

export const pilihTopikDanLokasi = (topik = 'Goal Setting') => {
  cy.get('.ant-form > #mentoring-schedule-request-session-btn').should('be.visible').click();
  cy.get('button').contains(topik).should('be.visible').click();
  cy.get('#mentoring-schedule-topic-request-session-btn').should('be.visible').click();
  cy.get('#sessionPlace').click({ force: true });
  cy.contains('.ant-select-item-option', 'Online').click({ force: true });
};

export const isiCatatan = (notes) => {
  cy.get('#notes').scrollIntoView().should('be.visible').clear().type(notes);
};

export const klikSelanjutnyaDariCatatan = () => {
  cy.get('#mentoring-schedule-pick-schedule-request-session-btn').should('be.visible').click();
};

export const isiDataPribadi = ({ fullName, whatsapp, email, birthDate }) => {
  if (fullName !== undefined) cy.get('#fullName').should('be.visible').clear().type(fullName);
  if (whatsapp !== undefined) cy.get('#whatsapp').should('be.visible').clear().type(whatsapp);
  if (email !== undefined) cy.get('#email').should('be.visible').clear().type(email);
  if (birthDate !== undefined) cy.get('#birthDate').should('be.visible').clear().type(birthDate);
};

export const klikSelanjutnyaDariDataPribadi = () => {
  cy.get('#mentoring-schedule-personal-information-request-session-btn').should('be.visible').click();
};

export const isiPassword = (password, confirmPassword) => {
  cy.get('#password').should('be.visible').type(password);
  cy.get('#confirmPassword').should('be.visible').type(confirmPassword);
};

export const centangCheckbox = () => {
  cy.get('input.ant-checkbox-input[value="1"]').click({ force: true });
  cy.get('input.ant-checkbox-input[value="3"]').click({ force: true });
};

export const cekErrorMessage = (text) => {
  cy.get('.ant-form-item-explain-error').should('contain.text', text);
};

export const alerterror = () => {
  cy.get('.ant-message-notice-content')
    .should('be.visible')
    .and('contain.text', 'Email already exist');
};
