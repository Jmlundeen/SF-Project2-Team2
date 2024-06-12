import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';

export default class ContactServiceComponent extends NavigationMixin(LightningElement) {
    navigateToService() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Service__c'
            }
        });
    }

}