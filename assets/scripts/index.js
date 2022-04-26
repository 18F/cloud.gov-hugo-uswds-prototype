import * as uswds from 'uswds';
import { Application } from '@hotwired/stimulus';

import NewsletterController from './controllers/newsletter';

const Stimulus = Application.start();

Stimulus.register('newsletter', NewsletterController);
