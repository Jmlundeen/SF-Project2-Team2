import { LightningElement, api } from 'lwc';

export default class AccountViolationError extends LightningElement {
    @api account;
    errorMessage;

    get isViolation() {
        if (!this.account) {
            return false;
        }
        this.errorMessage = 'Your account is in violation of our business requirements. Please fix the following issues:';
        violations = '';
        if (this.account.active === false) {
            this.violations += '\nAccount is not active.';
        }

        if (this.account.numberOfEmployees > 1500) {
            this.violations += '\nNumber of employees exceeds 1500.';
        }

        if (this.account.annualRevenue > 40_000_000) {
            this.violations += '\nAnnual revenue exceeds $40,000,000.';
        }
        return this.violations === '';
    }
}