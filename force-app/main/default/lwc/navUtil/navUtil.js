    import { NavigationMixin } from 'lightning/navigation';
    function navigateToHome(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }
    
    function navigateToContact(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Contact_Us__c'
            }
        });
    }
    
    function navigateToLogin(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Login'
            }
        });
    }
    
    function navigateToRegister(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Register'
            }
        });
    }
    
    function navigateToForgotPassword(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Forgot_Password'
            }
        });
    }
    
    function navigateToCheckPassword(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Check_Password'
            }
        });
    }
    
    function navigateToNewsDetail(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'News_Detail__c'
            }
        });
    }
    
    function navigateToBusinessAccount(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'small_business_account__c'
            }
        });
    }

    function navigateToSupport(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Service__c'
            }
        });
    }

    function navigateToAppStatus(componentInstance) {
        componentInstance[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'ApplicationStatusPage__c'
            }
        });
    }



export {
    navigateToHome,
    navigateToContact,
    navigateToLogin,
    navigateToRegister,
    navigateToForgotPassword,
    navigateToCheckPassword,
    navigateToNewsDetail,
    navigateToBusinessAccount,
    navigateToSupport,
    navigateToAppStatus
}