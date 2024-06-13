import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
import { NavigationMixin } from 'lightning/navigation';
import Id from '@salesforce/user/Id';

export default class Nav extends NavigationMixin(LightningElement) {

    userId = Id;
    logoUrl = IMAGES + '/EERE.png';

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
        type: "comm__namedPage",
        attributes: {
            name: "Contact_Us__c"
        }
        });
    }

    navigateToLogin(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Login'
            }
        });
    }

    
    navigateToAccount() {
        this[NavigationMixin.Navigate]({
        type: "comm__namedPage",
        attributes: {
            name: "small_business_account__c"
        }
        });
    }
}
