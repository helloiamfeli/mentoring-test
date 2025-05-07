import {
  visitMentorPage,
  pilihTopikDanLokasi,
  isiCatatan,
  klikSelanjutnyaDariCatatan,
  isiDataPribadi,
  klikSelanjutnyaDariDataPribadi,
  isiPassword,
  centangCheckbox,
  cekErrorMessage,
  alerterror,
} from '../support/mentoringHelpers';

describe('Mentor Discovery & Booking Flow', () => {

  beforeEach(() => {
    visitMentorPage();
  });

  it('should allow guest user to book a session with a fixed-schedule mentor', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();

    isiDataPribadi({
      fullName: "Feli Ramadani",
      whatsapp: "6281234567889",
      email: "hiiamfeli@gmail.com",
      birthDate: "08/12/2000"
    });

    klikSelanjutnyaDariDataPribadi();
    isiPassword("Deallsjob123", "Deallsjob123");
    centangCheckbox();
  });

  it('should show an error when notes input is less than 50 characters', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda.");
    cekErrorMessage('Minimum 50 characters');
  });

  it('should show an error when full name field is empty', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli" });
    cy.get('#fullName').clear();
    cekErrorMessage('Required');
  });

  it('should show an error when WhatsApp number is less than 6 digits', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "6281" });
    cekErrorMessage('WhatsApp Number is not valid');
  });

  it('should show an error when WhatsApp number does not start with country code', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "082139" });
    cekErrorMessage('Please start with your country code. Ex: 6281112233');
  });

  it('should show an error when WhatsApp number field is empty', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "082139" });
    cy.get('#whatsapp').clear();
    cekErrorMessage('WhatsApp Number is required');
  });

  it('should show an error when email has an invalid domain format', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "6282139380311", email: "feli@gmail,com" });
    cekErrorMessage('Email is invalid');
  });

  it('should show an error when email field is empty', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "6282139380311", email: "feli@gmail.com" });
    cy.get('#email').clear();
    cekErrorMessage('Required');
  });

  it('should show an error when birth date format is invalid', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "6282139380311", email: "feli@gmail.com", birthDate: "0812200" });
    cekErrorMessage('Invalid date format');
  });

  it('should show an error when birth date field is empty', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();
    isiDataPribadi({ fullName: "Feli Ramadani", whatsapp: "6282139380311", email: "feli@gmail.com", birthDate: "08122000" });
    cy.get('#birthDate').clear();
    cekErrorMessage('Required');
  });

  it('should show error when booking in guest mode with an already registered email', () => {
    pilihTopikDanLokasi();
    isiCatatan("Hi Kak Melinda Thea Rahmani Salim, I'm Feli Ramadani & I look forward to having a mentoring session with you.");
    klikSelanjutnyaDariCatatan();

    isiDataPribadi({
      fullName: "Feli Ramadani",
      whatsapp: "6281234567889",
      email: "hello.feliraa@gmail.com",
      birthDate: "08/12/2000"
    });

    klikSelanjutnyaDariDataPribadi();
    alerterror();
  });
  

});

