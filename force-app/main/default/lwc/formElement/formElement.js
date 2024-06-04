import { LightningElement, api } from 'lwc';

export default class formElement extends LightningElement {
    @api field;
    @api value;
    @api type = 'text';

    get isPhoneNumber() {
        return this.type.toLowerCase() === 'phone';
    }

    get isEmail() {
        return this.type.toLowerCase() === 'email';
    }

    get isDate() {
        return this.type.toLowerCase() === 'date';
    }

    get isNumber() {
        return this.type.toLowerCase() === 'number';
    }

    get isText() {
        return this.type.toLowerCase() === 'text';
    }

    get isPercent() {
        return this.type.toLowerCase() === 'percent';
    }
}