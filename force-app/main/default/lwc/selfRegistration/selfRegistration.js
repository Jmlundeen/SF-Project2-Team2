import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import createPortalUser from '@salesforce/apex/PortalUserHandler.createPortalUser';

export default class SelfRegistration extends NavigationMixin(LightningElement) {
    errorMessage;
    tempPassword;
    tempEmail;
    tempConfirmPassword;
    tempAccessCode;

    // Reactive vars.
    email;
    password;
    accessCode;

    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    @wire(createPortalUser, {
        email: "$email",
        password: "$password",
        accessCode: "$accessCode"
    })
    registerUser({ data, error }) {
        if (data) {
            console.log(data);
            error = null;
        }
        else if (error) {
            this.errorMessage = error.body.message;
            console.log(error.body.message);
        }
    }

    handleEmailChange(event) {
        this.tempEmail = event.target.value;
    }

    handlePasswordChange(event) {
        this.tempPassword = event.target.value;
    }

    handleConfirmPasswordChange(event) {
        this.tempConfirmPassword = event.target.value;
    }

    handleAccessCodeChange(event) {
        this.tempAccessCode = event.target.value;
    }

    handleRegister(event) {
        event.preventDefault();
        this.email = this.tempEmail;
        this.password = this.tempPassword;
        this.accessCode = this.tempAccessCode;
        this.navigateToHome();
    }

    navigateToHome() {
        this[NavigationMixin.Navigate]({
          type: "comm__namedPage",
          attributes: {
            name: "Login"
          }
        });
      }
}