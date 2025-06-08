import { HomePage } from './pageObjects/HomePage';
import { ContactPage } from './pageObjects/ContactPage';

describe('Contact Form Successful Submission', () => {
  const home = new HomePage();
  const contact = new ContactPage();

  beforeEach(() => {
    home.visit();
  });

  it('Contact form consistent successful submission (5 runs)', () => {
    for (let i = 0; i < 5; i++) {
      home.goToContactPage();
      contact.goToContactForm(); // Handle success message if present
      contact.fillMandatoryFields({
        forename: 'Jane',
        email: `jane${i}@test.org`,
        message: 'Test message'
      });
      contact.clickSubmit(true);
      contact.getSuccessMessage().should('contain', 'we appreciate your feedback');
    }
  });
});
