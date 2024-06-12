import { LightningElement, api } from 'lwc';

export default class AccountViolationError extends LightningElement {
    @api account;
    errorMessage;

    get isViolation() {
        if (!this.account || (this.account.active === true && this.account.numberOfEmployees <= 1500 && this.account.annualRevenue <= 40_000_000)) {
            return false;
        }
        this.errorMessage = 'Your account is in violation of our business requirements. Please fix the following issues:';

        if (this.account.active === false) {
            this.errorMessage += '\nAccount is not active.';
        }

        if (this.account.numberOfEmployees > 1500) {
            this.errorMessage += '\nNumber of employees exceeds 1500.';
        }

        if (this.account.annualRevenue > 40_000_000) {
            this.errorMessage += '\nAnnual revenue exceeds $40,000,000.';
        }
        return true;
    }
}