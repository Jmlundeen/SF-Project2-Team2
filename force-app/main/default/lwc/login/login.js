import { LightningElement } from "lwc";

export default class Login extends LightningElement {
    errorMessage;
    userEmail;
    userPassword;

    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    handleUsernameOnChange( event ) {
        this.userEmail = event.target.value;
    }

    handlePasswordOnChange( event ){
        this.userPassword = event.target.value;
    }

    handleSubmit( event ) {
        event.preventDefault();

        // Validate email address.
        if( !this.isValidEmail( this.userEmail ) ){
            this.errorMessage = 'Error: Invalid Email Address!';
            console.log( this.errorMessage );
            return;
        }
        
        // Validate password.
        if( !this.isValidPassword( this.userPassword ) ){
            this.errorMessage = 'Error: Password must not be empty!!!';
            console.log( this.errorMessage );
            return;
        }

        this.errorMessage = null;
    }


    isValidEmail = ( email ) => {
    /**
     * This function checks if the provided email address is a valid
     * email address.
     */
    
        // Base case: return if email is empty.
        if ( !email ) {
            return false;
        }

        let tempEmail = String( email ).toLowerCase();
        
        // Match against the predefined email regex.
        if( !tempEmail.match( this.emailRegex ) ){
            return false;
        }
        
        return true;
    };

    isValidPassword = ( password ) => {
        if( !password ){
            return false;
        }

        return true;
    }
}
