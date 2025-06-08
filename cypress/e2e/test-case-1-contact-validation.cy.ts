import { HomePage } from './pageObjects/HomePage';
import { ContactPage } from './pageObjects/ContactPage';

describe('Contact Form Error Validation', () => {
  const home = new HomePage();
  const contact = new ContactPage();

  beforeEach(() => {
    home.visit();
  });

  it('Contact form error validation', () => {
    home.goToContactPage();
    contact.clickSubmit();
    
    // Verify error messages appear
    contact.validateErrorMessage('forename', 'Forename is required');
    contact.validateErrorMessage('email', 'Email is required');
    contact.validateErrorMessage('message', 'Message is required');

    // Fill mandatory fields
    contact.fillMandatoryFields({
      forename: 'John',
      email: 'john.doe@test.org',
      message: 'Test message'
    });
    contact.clickSubmit(true);  // Expect no error messages after filling mandatory fields
    contact.verifyNoErrorMessages();
  });
});
