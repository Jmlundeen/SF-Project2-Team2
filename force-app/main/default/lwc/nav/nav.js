import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
import { NavigationMixin } from 'lightning/navigation';

export default class Nav extends NavigationMixin(LightningElement) {
    logoUrl = IMAGES + '/EERE.png';

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'Home'
            }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Contact_Us__C'
            }
        });
    }

    navigatetoLogin(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Login'
            }
        });
    }
}