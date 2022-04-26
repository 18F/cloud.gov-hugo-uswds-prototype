import { Controller } from '@hotwired/stimulus';

export default class NewsletterController extends Controller {
  static targets = [ 'email', 'successMessage', 'errorMessage' ];

  get email() {
    return this.emailTarget.value;
  }

  subscribe(event) {
    event.preventDefault();

    if (this.email.includes('fail')) {
      this.showErrorMessage();
    }
    else {
      this.showSuccessMessage();
      this.emailTarget.value = '';
    }
  }

  showErrorMessage() {
    this.successMessageTarget.hidden = true;
    this.errorMessageTarget.hidden = false;
  }

  showSuccessMessage() {
    this.successMessageTarget.hidden = false;
    this.errorMessageTarget.hidden = true;
  }
}
