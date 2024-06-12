import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/Images";
import { NavigationMixin } from "lightning/navigation";

export default class Nav extends NavigationMixin(LightningElement) {
  logoUrl = IMAGES + "/EERE.png";

  navigateToHome() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "Home"
      }
    });
  }
  n;

  navigateToContact() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "Contact_Us__c"
      }
    });
  }

  navigateToLogin() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "Login"
      }
    });
  }
}
