import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getUser from "@salesforce/apex/LoginHandler.getUser";

export default class Login extends NavigationMixin(LightningElement) {
  errorMessage;
  tempUserName;
  tempPassword;

  // Reactive vars.
  userName;
  userPassword;

  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  @wire(getUser, {
    userName: "$userName",
    password: "$userPassword"
  })
  verifyLogin({ data, error }) {
    if (data) {
      // ***TEST*** //
      console.log(data);

      switch (Number(data)) {
        // If verifyLogin returns -1: no users found.
        case -1:
          this.errorMessage = "No users found!";
          break;

        // If verifyLogin returns 0: found user but inactive.
        case 0:
          this.errorMessage =
            "User is inactive, please contact Admin for more info!";
          break;

        // default: found active user.
        default:
          // Navigate to home page.
          this.navigateToHome();
          this.errorMessage = null;
          break;
      }
    } else if (error) {
      this.errorMessage = error.body.message;

      // ***TEST*** //
      console.log(error.body.message);
    }
  }

  handleUsernameOnChange(event) {
    this.tempUserName = event.target.value;
  }

  handlePasswordOnChange(event) {
    this.tempPassword = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validate email address.
    if (!this.isValidEmail(this.tempUserName)) {
      this.errorMessage = "Error: Invalid Email Address!";

      // ***TEST*** //
      console.log(this.errorMessage);

      return;
    }

    // Validate password.
    if (!this.isValidPassword(this.tempPassword)) {
      this.errorMessage = "Error: Password must not be empty!!!";

      // ***TEST*** //
      console.log(this.errorMessage);

      return;
    }

    this.errorMessage = null;
    this.userName = this.tempUserName;
    this.userPassword = this.tempPassword;
  }

  isValidEmail = (email) => {
    /**
     * This function checks if the provided email address is a valid
     * email address.
     */

    // Base case: return if email is empty.
    if (!email) {
      return false;
    }

    let tempEmail = String(email).toLowerCase();

    // Match against the predefined email regex.
    if (!tempEmail.match(this.emailRegex)) {
      return false;
    }

    return true;
  };

  isValidPassword = (password) => {
    if (!password) {
      return false;
    }

    return true;
  };

  navigateToHome() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "Home"
      }
    });
  }
}
