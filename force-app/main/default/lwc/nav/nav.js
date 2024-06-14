import { LightningElement, track } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
import { NavigationMixin } from 'lightning/navigation';
import Id from '@salesforce/user/Id';
import getLogoutUrl from '@salesforce/apex/applauncher.IdentityHeaderController.getLogoutUrl';
import { navigateToHome, navigateToContact, navigateToLogin, navigateToAccount, navigateToSupport,
    navigateToBusinessAccount, navigateToAppStatus } from 'c/navUtil';

export default class Nav extends NavigationMixin(LightningElement) {

    @track userId = Id;
    logoUrl = IMAGES + '/EERE.png';

    goToHome() {
        navigateToHome(this);
    }

    goToContact() {
        navigateToContact(this);
    }

    goToLogin() {
        navigateToLogin(this);
    }

    goToAccount() {
        navigateToAccount(this);
    }

    goToSupport() {
        navigateToSupport(this);
    }

    goToProfile() {
        navigateToBusinessAccount(this);
    }

    async goToLogout() {
        const logoutUrl = await getLogoutUrl();
        await fetch(logoutUrl)
        navigateToHome(this);
    }

    goToAppStatus() {
        navigateToAppStatus(this);
    }
}
