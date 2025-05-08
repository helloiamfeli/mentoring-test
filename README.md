# Cypress Mentoring Test

This project contains end-to-end (E2E) test automation scripts using Cypress for the Mentoring web application.

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── 1-SearchandFilter.cy.js
│   └── 2-Mentoring Booking – Fixed Schedule.cy.js
├── support/
│   ├── commands.js
│   └── mentoringHelpers.js
```

- 1-SearchandFilter.cy.js: Tests search and filter functionality for mentoring.
- 2-Mentoring Booking – Fixed Schedule.cy.js: Covers the mentoring booking flow, including form validations and positive scenarios.
- support/mentoringHelpers.js: Contains helper functions to keep tests clean and reusable.

## 🧪 How to Run Tests

Make sure you have installed the dependencies:

```bash
npm install
```

Then, open Cypress Test Runner:

```bash
npx cypress open
```

Or run tests in headless mode:

```bash
npx cypress run
```

## 🔁 CI Integration

This repository includes CI configuration to automatically run Cypress tests on each push and pull request. Make sure your CI pipeline supports Node.js and includes commands like `npm install` and `npx cypress run`.

## ✅ Test Scenarios

### 1. Search and Filter

- Searching for mentor by full name and exertise

### 2. Booking Mentoring – Fixed Schedule

- Positive booking scenario with valid data
- Negative test: Missing WhatsApp number
- Form validation for full name and notes
- Navigation through all booking steps
